from flask import Flask, request, jsonify, session
from flask_cors import CORS
from models import db, User
from werkzeug.security import generate_password_hash, check_password_hash
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY') or 'dev-key-please-change'
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL') or 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Configure CORS to allow our React app
CORS(app, 
     resources={r"/*": {"origins": os.environ.get('FRONTEND_URL') or "http://localhost:5173"}},
     supports_credentials=True)

db.init_app(app)

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        if not data or 'username' not in data or 'password' not in data:
            return jsonify({'error': 'Missing username or password'}), 400
            
        if User.query.filter_by(username=data['username']).first():
            return jsonify({'error': 'Username already exists'}), 400
            
        hashed_pw = generate_password_hash(data['password'])
        new_user = User(username=data['username'], password=hashed_pw)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        if not data or 'username' not in data or 'password' not in data:
            return jsonify({'error': 'Missing username or password'}), 400
            
        user = User.query.filter_by(username=data['username']).first()
        if not user or not check_password_hash(user.password, data['password']):
            return jsonify({'error': 'Invalid username or password'}), 401
            
        session['user_id'] = user.id
        return jsonify({
            'message': 'Logged in successfully',
            'user': {
                'username': user.username,
                'progress': user.progress
            }
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/logout', methods=['POST'])
def logout():
    try:
        session.pop('user_id', None)
        return jsonify({'message': 'Logged out successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/progress', methods=['GET'])
def get_progress():
    try:
        if 'user_id' not in session:
            return jsonify({'error': 'Not logged in'}), 401
            
        user = User.query.get(session['user_id'])
        if not user:
            return jsonify({'error': 'User not found'}), 404
            
        return jsonify({
            'progress': user.progress,
            'attempts': user.attempts
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'Server is running'}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
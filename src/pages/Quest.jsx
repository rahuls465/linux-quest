import { useEffect, useState } from 'react';
import questsData from '../data/quests.json';
import { useParams } from 'react-router-dom'; // For getting :day from the URL

function Quest() {
  const { day } = useParams();              // Get the day number from the route (e.g., /quest/1)
  const [quest, setQuest] = useState(null); // Store the quest data for this day

  // Load the quest when day changes
  useEffect(() => {
    const questDay = questsData.find(q => q.day === parseInt(day));
    setQuest(questDay);
  }, [day]);

  if (!quest) return <div>Loading...</div>; // Simple loading state

  return (
    <div className="quest">
      {/* Quest Title */}
      <h2>{quest.title}</h2>

      {/* Theory Section */}
      <p>{quest.theory}</p>

      {/* Audio Briefing */}
      <audio controls src={quest.audio}></audio>

      {/* Reward Section */}
      <div className="reward">
        <h3>🎁 Reward Unlocked:</h3>
        <div>{quest.reward.icon} {quest.reward.name}</div>
        <p>{quest.reward.description}</p>
      </div>

      {/* Level Tasks */}
      <h4>🧪 Levels</h4>
      <ul>
        {quest.levels.map(level => (
          <li key={level.id}>{level.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quest;

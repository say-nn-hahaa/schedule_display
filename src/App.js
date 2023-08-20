import React, { useState } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; 

const matchesData = {
  Badminton: {
    image: 'https://media.istockphoto.com/id/1094296236/photo/asian-badminton-player-is-hitting-in-court.jpg?s=170667a&w=0&k=20&c=OxfsthWTCHLT0I7DsRUZ71WXItTxy2rCBiDQsxKA5Xs=',
    matches:[
    { teamA: 'Badminton Bandits', teamB: 'Racquet Rebels', location: 'SAC  ', time: '10:30  ',date: '2023-10-13', },
    { teamA: 'Net Ninjas', teamB: 'Smash Squad', location: 'SAC  ', time: '13:45  ',date: '2023-10-13', },
    { teamA: 'Fast Featherers', teamB: 'Beating Beasts', location: 'SAC  ', time: '10:30  ',date: '2023-10-14', },
    { teamA: 'Swift Strokers', teamB: 'HotWhots', location: 'SAC  ', time: '13:45  ',date: '2023-10-14', },
  ],
},
  Basketball: {
    image: 'https://img.freepik.com/premium-photo/player-throws-ball-basket-stadium-full-spectators_207634-3987.jpg?size=626&ext=jpg&uid=R94261940&ga=GA1.2.2024253405.1677091885&semt=sph',
    matches:[
    { teamA: 'Ball Hogz', teamB: 'D-Fence', location: 'Rajputana Ground  ', time: '18:00  ',date: '2023-10-14', },
    { teamA: 'Net Rippers', teamB: 'Dragon Trainers', location: 'Rajputana Ground  ', time: '20:15  ' , date: '2023-10-14',},
    { teamA: 'Game of Throws', teamB: 'Basket Hounds', location: 'Rajputana Ground  ', time: '18:00  ' ,date: '2023-10-15',},
    { teamA: 'Slytherin', teamB: 'Defenders', location: 'Rajputana Ground  ', time: '20:15  ' ,date: '2023-10-15',},
  ],
},
  Cricket:{ 
    image: 'https://media.istockphoto.com/id/525227962/photo/cricket-batsman-with-bat-up-after-hitting-ball-in-game.webp?b=1&s=170667a&w=0&k=20&c=cKtZcVfT1tImevmgvHoNj5dS9uHMBj9Vq9NlXPWP5YI=',
    matches:[
    { teamA: 'Dark Knights', teamB: 'Swift Strikers', location: 'Gymkhana Ground  ', time: '10:30  ',date: '2023-10-14', },
    { teamA: 'Super Sixes', teamB: 'Royal Challengers', location: 'Gymkhana Ground   ', time: '13:45  ',date: '2023-10-14', },
    { teamA: 'Mighty Lions', teamB: 'Flash Falcons', location: 'Gymkhana Ground   ', time: '10:30  ' ,date: '2023-10-15',},
    { teamA: 'Hit Squad', teamB: 'The Pitch Pals', location: 'Gymkhana Ground  ', time: '13:45  ',date: '2023-10-15', },
  ],
},
  Football:{
    image: 'https://wallpaperaccess.com/full/1884497.jpg',
    matches:[
    { teamA: 'NY Yorks', teamB: 'KING Yorks', location: 'Gymkhana Ground  ', time: '12:00  ' ,date: '2023-10-14',},
    { teamA: 'NV Titans', teamB: '82 Club', location: 'Gymkhana Ground  ', time: '17:45  ' ,date: '2023-10-14',},
    { teamA: 'League', teamB: 'Frans FFF', location: 'Gymkhana Ground  ', time: '12:00 ' ,date: '2023-10-15',},
    { teamA: 'Club Team', teamB: 'Maters', location: 'Gymkhana Ground  ', time: '17:45  ' ,date: '2023-10-15',},
  ],
},
Kabaddi: {
  image: 'https://e1.pxfuel.com/desktop-wallpaper/1014/576/desktop-wallpaper-red-bull-tashan-2018-kabaddi-logo.jpg',
  matches:[
  { teamA: 'Invincible Titans', teamB: 'Agile Falcons', location: 'ADV Ground  ', time: '14:00  ',date: '2023-10-15', },
  { teamA: 'Fierce Dragons', teamB: 'Thunderbolts', location: 'ADV Ground  ', time: '16:30  ' ,date: '2023-10-15',},
  { teamA: 'Mighty Stallions', teamB: 'Warriors', location: 'ADV Ground  ', time: '19:00  ',date: '2023-10-15', },
],
},
  Squash: {
    image: 'https://sport360.com/wp-content/uploads/2016/05/GettyImages-534932994.jpg',
    matches:[
    { teamA: 'Sweet Shots', teamB: 'Clowns', location: 'SAC  ', time: '12:00 ' ,date: '2023-10-15',},
    { teamA: 'Alpha Club', teamB: 'Phantom', location: 'SAC  ', time: '17:45  ' ,date: '2023-10-15',},
  ],
},
  Tennis:{ 
    image: 'https://t3.ftcdn.net/jpg/05/95/72/88/360_F_595728841_pQ9v3McA1BCWwqOJ7KZsC9gb8v5qIDHf.webp',
    matches:[
    { teamA: 'Ace Breakers', teamB: 'Breaking Bad', location: 'Rajputana Tennis Court  ', time: '17:30  ' ,date: '2023-10-14',},
    { teamA: 'Dare Doubles', teamB: 'High Fives', location: 'Rajputana Tennis Court  ', time: '20:30  ' ,date: '2023-10-14',},
    { teamA: 'Senioritas', teamB: 'Tennisanity', location: 'Rajputana Tennis Court  ', time: '17:30  ' ,date: '2023-10-15',},
    { teamA: 'The Hustlers', teamB: 'Spinderellas', location: 'Rajputana Tennis Court  ', time: '20:30  ' ,date: '2023-10-15',},
  ],
},
  Volleyball:{
    image: 'https://t4.ftcdn.net/jpg/01/23/19/87/360_F_123198705_HHB36SHxNnTspMYX7mXqg9rAGwS5tNB0.jpg',
    matches: [
    { teamA: 'Volleyholics', teamB: 'Smashers', location: 'Rajputana Ground  ', time: '10:30  ' ,date: '2023-10-13',},
    { teamA: 'Thunderballs', teamB: 'Hard Hitters', location: 'Rajputana Ground  ', time: '13:45  ',date: '2023-10-13', },
    { teamA: 'Blockers', teamB: 'Serv-ivors', location: 'Rajputana Ground  ', time: '16:00  ' ,date: '2023-10-13',},
  ],
},
};

function App() {
  const [selectedSport, setSelectedSport] = useState(null);
  const [expandedMatches, setExpandedMatches] = useState({});

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  const toggleMatchExpansion = (matchIndex) => {
    setExpandedMatches((prevExpanded) => ({
      ...prevExpanded,
      [selectedSport]: {
        ...prevExpanded[selectedSport],
        [matchIndex]: !prevExpanded[selectedSport]?.[matchIndex],
      },
    }));
  };

  return (
    <div className="App">
      <div className="sidebar">
        {Object.keys(matchesData).map((sport) => (
          <div
            key={sport}
            className={`icon ${selectedSport === sport ? 'active' : ''}`}
            onClick={() => handleSportClick(sport)}
          >
            {sport}
          </div>
        ))}
      </div>
      <div className="main">
        <h1>Upcoming Matches</h1>
        {selectedSport ? (
          <div className="matchDisplay">
            <img
              src={matchesData[selectedSport].image}
              alt={`${selectedSport} Icon`}
              className="sportImage"
            />
            {matchesData[selectedSport].matches.map((match, index) => (
               <div key={index} className="match">
                <h4>
                  {match.teamA} vs. {match.teamB}
                </h4>
                <div className="details-container">
                <p>
                   <FontAwesomeIcon icon={faMapMarkerAlt} /> {match.location}
                </p>
                 <p>
                   <FontAwesomeIcon icon={faClock} /> {match.time}
                </p>
                <p>
                     <FontAwesomeIcon icon={faCalendarAlt} /> {new Date(match.date).toLocaleDateString()}
                </p>
                </div>
                   <button onClick={() => toggleMatchExpansion(index)}>
                  {expandedMatches[selectedSport]?.[index] ? 'Hide Details' : 'View Details'}
                </button>
                <CSSTransition
                  in={expandedMatches[selectedSport]?.[index]}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                >
                  <div className="matchDetails">
                  <p>Other details will be added later</p>
                  </div>
                </CSSTransition>
              </div>
            ))}
          </div>
        ) : (
          <p>Select a sport to view matches</p>
        )}
      </div>
    </div>
        
  );
}


export default App;
//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  var manager_data_array=[];
  manager_data_array.push(managerName);
  manager_data_array.push(managerAge);
  manager_data_array.push(currentTeam);
  manager_data_array.push(trophiesWon);
  return manager_data_array;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation)
{
  if(formation.length==0)return null;
  var formation_object={
    defender:formation[0],
     midfield:formation[1],
      forward:formation[2]
  }
  return formation_object;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year)
{
   return players.filter(item => item.debut==year);
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position)
{
  return players.filter(item=> item.position==position);
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
  if(awardName==undefined)return [];
  return players.filter(item => (item.awards.filter(awards =>awards.name==awardName).length!=0));
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes)
{
  return players.filter(item => (item.awards.filter(awards =>awards.name==awardName).length==noOfTimes));
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country)
{
  if(awardName==undefined || country==undefined)return [];
  return players.filter(item => (item.country==country && item.awards.filter(awards =>awards.name==awardName).length!=0));
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)
{
  return players.filter(item=>item.awards.length>=noOfAwards && item.team==team && item.age<=age);
}
//Progression 9 - Sort players in descending order of their age
function SortByAge()
{
  return players.sort(function(player1,player2){
    return player1.age-player2.age;
  });
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team)
{
  return players.filter(item =>item.team==team ).sort(function(player1,player2){
    if(player2.awards.length == player1.awards.length)return player1.debut-player2.debut;
    return player2.awards.length-player1.awards.length;
  });
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country)
{
  return filterByAwardxTimes(awardName,noOfTimes).filter(item=> item.country==country).sort(
    function(player1,player2)
    {
      const player1_name=player1.name.toUpperCase();
      const player2_name = player2.name.toUpperCase();

      let comparison = 0;
      if (player1_name> player2_name) {
        comparison = 1;
      } else if (player2_name>player1_name) {
        comparison = -1;
      }
      return comparison;
    }
  )
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age)
{
  return (players.filter(item=> item.age>=age).sort(
    function(player1,player2)
    {
      const player1_name=player1.name.toUpperCase();
      const player2_name = player2.name.toUpperCase();
      player1.awards.sort(
        function(award1,award2)
        {
          return award2.year-award1.year;
        }
      )
      player2.awards.sort(
        function(award1,award2)
        {
          return award2.year-award1.year;
        }
      )
      let comparison = 0;
      if (player1_name> player2_name) {
        comparison = 1;
      } else if (player2_name>player1_name) {
        comparison = -1;
      }
      return comparison;
    }
  ));
}
// js/culturals-data.js
// Real participant data from provided files - NO PHONE NUMBERS

const performances = [
  // From performance list.pdf - Day 2 Performances
  { id: 1, name: "B.Sreeja", branch: "H&S", songs: ["Shiva Shiva Shankara"], duration: "3.30 min", category: "Group" },
  { id: 2, name: "pranathi", branch: "CSE", songs: ["Ringu Ringu", "Mama kuthura", "karthika deepam"], duration: "3 min", category: "Group" },
  { id: 3, name: "Abhinaya", branch: "ECE", songs: ["Bangaru kalla bujjamma", "ram babu", "chupuitho"], duration: "3.5 min", category: "Group" },
  { id: 4, name: "meghana", branch: "AIML", songs: ["Sankranthi", "adhire adhire", "pilla kondu"], duration: "3.5 min", category: "Group" },
  { id: 5, name: "ammulya", branch: "H&S", songs: ["vairal vayyari", "deku deku"], duration: "3min", category: "Group" },
  { id: 6, name: "teiaswini", branch: "DS", songs: ["Sharath", "jaram jaram", "nata mukka"], duration: "3 min 10 sec", category: "Group" },
  { id: 7, name: "sahasra", branch: "CS", songs: ["ayyo papam", "lasku tappa", "pulsur bike"], duration: "3.5 min", category: "Group" },
  { id: 8, name: "ashurutha", branch: "IT", songs: ["sami sami", "killimanjaro", "bangaru maisamma"], duration: "3 min", category: "Group" },
  { id: 9, name: "Charan teja", branch: "H&S", songs: ["Gudilo Badilo", "Mukkala"], duration: "3.25 min", category: "Group" },
  { id: 10, name: "akshaya", branch: "CSIT", songs: ["top lechi podhi", "zing zing", "dhurandhar", "pala pitta"], duration: "3 min", category: "Group" },
  { id: 11, name: "uday", branch: "AI&DS", songs: ["kanchana"], duration: "3.5 min", category: "Group" },
  { id: 12, name: "Indu", branch: "CIVIL", songs: ["Chinnaga", "Jilelamma jitha", "Vasthava Vasthava"], duration: "3 min", category: "Group" },
  { id: 13, name: "sharanya", branch: "H&S", songs: ["aunty kuthura", "chamkila angilesi", "nadaka kalisina"], duration: "3min", category: "Group" },
  { id: 14, name: "lahari", branch: "IOT", songs: ["afgan jiiebi", "jorse jorse", "ninnu ethaiii kann"], duration: "3.5 min", category: "Group" },
  { id: 15, name: "hanirudhvika", branch: "CSE", songs: ["chikini chemeli", "manmadha raja", "music chemeli"], duration: "3.5 min", category: "Group" },
  { id: 16, name: "Aravind", branch: "ECE", songs: ["agni muni"], duration: "3.5 min", category: "Group" },
  { id: 17, name: "Jabili", branch: "AIML", songs: ["bilone", "renukellama", "siricilla"], duration: "3 min", category: "Group" },
  { id: 18, name: "Akshaya", branch: "H&S", songs: ["golden sparrow", "tadka", "nahi natali"], duration: "3min", category: "Group" },
  { id: 19, name: "mahesh", branch: "CSE", songs: ["gang leader", "kala cheshma", "rara na dheera"], duration: "3.5 min", category: "Group" },
  { id: 20, name: "varsha", branch: "DS", songs: ["Vankathota", "rubber gajulu", "chukchuk bandi"], duration: "3.5 min", category: "Group" },
  { id: 21, name: "akshaya", branch: "CS", songs: ["sheelaki jaawani", "door no", "ata kavala"], duration: "3.5 min", category: "Group" },
  { id: 22, name: "Harika", branch: "IT", songs: ["rangu rangu", "meiikalu", "dialo dialo"], duration: "3 min", category: "Group" },
  { id: 23, name: "Jahnavi", branch: "AIML", songs: ["Ahana pelli anta"], duration: "3.5 min", category: "Group" },
  { id: 24, name: "vaishnavi", branch: "CSE", songs: ["abba cha", "diwali", "apadi pode", "chilaka mukku"], duration: "3 min", category: "Group" },
  { id: 25, name: "Harshini", branch: "H&S", songs: ["Gollavarame", "Botany", "Chinuku chinuu"], duration: "3min", category: "Group" },
  { id: 26, name: "roshini", branch: "AI&DS", songs: ["bunny bunny", "begam peta", "dremam"], duration: "3 min", category: "Group" },
  { id: 27, name: "archana", branch: "CSE", songs: ["flipperachi/Boom boom", "Vastava castava", "Bhigi Bhigi"], duration: "3 min", category: "Group" },
  { id: 28, name: "Chandana", branch: "ECE", songs: ["Nuv nenu janta", "it's time to party"], duration: "3 min", category: "Group" },
  { id: 29, name: "pravalika", branch: "AIML", songs: ["A ochi B pai vale", "monica", "Mirchi karam ramana"], duration: "3 min", category: "Group" },
  { id: 30, name: "chandhana", branch: "CSE", songs: ["uyui amma", "mala tum tum", "dabidi"], duration: "3.5 min", category: "Group" },
  { id: 31, name: "shivani", branch: "DS", songs: ["kura gori", "chirutha kannulatho", "kurchi madtha petti"], duration: "3.5 min", category: "Group" },
  { id: 32, name: "swarna sree", branch: "AI&DS", songs: ["chandra kala", "reddy ikkada chudu", "young yama"], duration: "3.5 min", category: "Group" },
  { id: 33, name: "yashwanth", branch: "AIML", songs: ["balle balle (punjabi theme)"], duration: "3 min", category: "Group" },
  { id: 34, name: "manasa", branch: "CSE", songs: ["kevvu kekka", "jinthak", "yela yela"], duration: "3.5 min", category: "Group" },
  { id: 35, name: "aishwarya", branch: "AIML", songs: ["oye raju", "aunty kuthura", "chilaka chandana"], duration: "3.5 min", category: "Group" },
  { id: 36, name: "dikshitha", branch: "CSE", songs: ["alegra", "dethadi"], duration: "3.5 min", category: "Group" },
  { id: 37, name: "hansika", branch: "DS", songs: ["chikiri", "swathilo muthyam", "bolo im in love", "iinthaka iinthaka"], duration: "3.5 min", category: "Group" },
  { id: 38, name: "jashwanth", branch: "CSE", songs: ["kodi kura", "na peru chinna", "mass beat"], duration: "3 min", category: "Group" },
  { id: 39, name: "indu", branch: "AI&DS", songs: ["super hit", "maro maro", "sye- sye"], duration: "3.5 min", category: "Group" },
  { id: 40, name: "mounika", branch: "CSE", songs: ["raye raye sami", "killimanjaro", "bobbili raia"], duration: "3 min", category: "Group" },
  { id: 41, name: "abhigna", branch: "DS", songs: ["sukku bhai", "raaye raaye", "vammo vayyo", "chuda sakkaga unnave"], duration: "3 min", category: "Group" },

  // From DAY-3 _D4-X3- _4-5 PM.xlsx - College Performances
  { id: 42, name: "AKHILA", branch: "SICET-D4", songs: ["KERALA"], duration: "2.40 MINS", category: "Group", note: "College Performance" },
  { id: 43, name: "SIDDU & GROUP", branch: "SIIET-X3", songs: ["TAAL SE TAAL MILA", "HOOK STEP", "PACHA BOTTU", "GANAGANA MOGALIRA"], duration: "5 MINS", category: "Group", note: "College Performance" },
  { id: 44, name: "P CHARAN", branch: "SICET-D4", songs: ["PUSHPA THEME"], duration: "4.45 MINS", category: "Group", note: "College Performance" },
  { id: 45, name: "AAKASH GROUP", branch: "SIIET-X3", songs: ["ANDRA KING", "AUNTY KUTHURA/SWATHILO MUTHYAM", "FOLK", "KARTHIK DEEPAM"], duration: "5 MINS", category: "Group", note: "College Performance" },
  { id: 46, name: "ANUSHA", branch: "SICET-D4", songs: ["BONALU THEME"], duration: "3.34 MINS", category: "Group", note: "College Performance" },
  { id: 47, name: "DIVYA", branch: "PHARAMACY", songs: ["DOLE DOLE", "A ANTE AMALAPUR", "SAKKU BHAI", "FOLK SONG"], duration: "3.5MINS", category: "Group", note: "College Performance" },
  { id: 48, name: "HASINI", branch: "SIIET-X3", songs: ["MAHABHARATH THEME"], duration: "2 MIN 30 SEC", category: "Group", note: "College Performance" },
  { id: 49, name: "GANESH", branch: "SICET-D4", songs: ["GIRA GIRA", "KUNFU KUMARI", "RINGA RINGA"], duration: "3.5MINS", category: "Group", note: "College Performance" },
  { id: 50, name: "SOWMYA SREE", branch: "SIIET-X3", songs: ["IRAGA IRAGA", "AFGAN JILEBI", "DOLE DOLE", "DORALU TAGGE LPPA SARA", "DUKU DUKU", "JAJIKAYA"], duration: "4 MINS", category: "Group", note: "College Performance" },
  { id: 51, name: "RAGA SRI", branch: "SICET-D4", songs: ["SENEGASEELLA", "YERRA YERRA", "DARIPONTOTTUNDU"], duration: "3.10MINS", category: "Group", note: "College Performance" },
  { id: 52, name: "SAI PRIYA", branch: "SICET-D4", songs: ["GARBA -DOLEEDA", "DOKLA", "NIMMATHOTA"], duration: "2.55 MINS", category: "Group", note: "College Performance" },

  // From Day 3 solo & duo.xlsx - SOLO Performances
  { id: 53, name: "Pravalika", branch: "ECE", songs: ["Song from kanchana"], duration: "3.5 min", category: "Solo" },
  { id: 54, name: "Aparanchi", branch: "ECE", songs: ["Heh", "Hi ra la"], duration: "3 min", category: "Solo" },
  { id: 55, name: "Naveen", branch: "CS", songs: ["Dangerous"], duration: "3.5 min", category: "Solo" },
  { id: 56, name: "Keerthana", branch: "CSIT", songs: ["Bharatha vedham"], duration: "3.5 min", category: "Solo" },
  { id: 57, name: "Meghamala", branch: "CSE", songs: ["Dio dio", "Lila", "Dheku"], duration: "3 min", category: "Solo" },
  { id: 58, name: "Sneha priya", branch: "AIML", songs: ["Dilaku Dilaku", "Kalyani", "Apsara"], duration: "3.5 min", category: "Solo" },
  { id: 59, name: "Yogendar", branch: "Mech", songs: ["Monica", "Dhoom"], duration: "3.5 min", category: "Solo" },
  { id: 60, name: "Vishnu", branch: "AIML", songs: ["Apudo ipudo epudo"], duration: "3 min", category: "Solo" },
  { id: 61, name: "Meghana", branch: "AIML", songs: ["london thumdaka", "desi girl", "Chammak challo", "123"], duration: "3.5 min", category: "Solo" },
  { id: 62, name: "K.Yashwanth", branch: "AIML", songs: ["tere bhin"], duration: "4 min", category: "Solo" },
  { id: 63, name: "Lasya", branch: "H&S(CS)", songs: [], duration: "", category: "Solo" },
  { id: 64, name: "Giri", branch: "DS", songs: ["Hello Ramante", "DJ"], duration: "3.5 min", category: "Solo" },
  { id: 65, name: "B.Srinidhi", branch: "DS", songs: ["marri", "mukkala", "manmadude"], duration: "3.5 min", category: "Solo" },
  { id: 66, name: "Ravi teja", branch: "DS", songs: ["Cheliya", "Ranjithame"], duration: "3.5 min", category: "Solo" },

  // From Day 3 solo & duo.xlsx - DUO Performances
  { id: 67, name: "Yashwanth & Hemanth", branch: "ECE", songs: ["Hello ramante", "chikiri"], duration: "3 min", category: "Duo" },
  { id: 68, name: "Shruthi & Renu", branch: "CS", songs: ["Nalupu nerellu", "nuvu nen janta", "pathikela sundar golimar"], duration: "3 min", category: "Duo" },
  { id: 69, name: "Suhitha", branch: "AIML", songs: ["mudhuga na peru", "jatha chora", "kurchi madatha petti"], duration: "3 min", category: "Duo" }
];

// Get unique branches for filter
function getUniqueBranches() {
  const branches = new Set();
  performances.forEach(p => {
    if (p.branch) branches.add(p.branch);
  });
  return Array.from(branches).sort();
}

const uniqueBranches = getUniqueBranches();
var socketNER = require("./SocketNER.js")
var NER = socketNER(1234, null , "./StanfordNER/")

//starting server
NER.init()

var rawText = [
   'Steven Paul Jobs (/\ˈdʒɒbz/; February 24, 1955 – October 5,',
   '2011) was an American technology entrepreneur, visionary and ',
   'inventor. He was the co-founder, chairman, and chief executive',
   ' officer (CEO) of Apple Inc.; CEO and largest shareholder of Pixar',
   ' Animation Studios;[3] a member of The Walt Disney Company\'s board',
   ' of directors following its acquisition of Pixar; and founder,',
   ' chairman, and CEO of NeXT Inc. Jobs is widely recognized as',
   ' a pioneer of the microcomputer revolution of the 1970s, along',
   ' with Apple co-founder Steve Wozniak. Shortly after his death,',
   ' Jobs\'s official biographer, Walter Isaacson, described him as the',
   ' "creative entrepreneur whose passion for perfection and ferocious',
   ' drive revolutionized six industries: personal computers, animated',
   ' movies, music, phones, tablet computing, and digital',
   ' publishing."[2]',
   'Adopted at birth in San Francisco, and raised in the San Francisco',
   ' Bay Area during the 1960s, Jobs\'s countercultural lifestyle was a',
   ' product of his time. As a senior at Homestead High School, in',
   ' Cupertino, California, his two closest friends were the older',
   ' engineering student (and Homestead High alumnus) Wozniak and his',
   ' countercultural girlfriend, the artistically inclined Homestead',
   ' High junior Chrisann Brennan. Jobs briefly attended Reed College',
   ' in 1972 before dropping out, deciding to travel through India in',
   ' 1974 and study Buddhism.',
]

var startTime = process.uptime()
rawText.forEach(function (line, i) {
   console.log(NER.getEntities(line, ""))
})
console.log(process.uptime() - startTime, "ms for 23 lines")
NER.close()
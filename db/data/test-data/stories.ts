const stories = [
  {
    title: 'Battle of the Titans',
    location: 'Mount Olympus, Greece',
    story_type: 'myth',
    story:
      'Mount Olympus was considered the home of the Olympian gods like Zeus, Hera, Poseidon, Athena, and others. This mountain was seen as the meeting place where gods convened and ruled over the mortal world below.',
    authorId: 1,
    latlong: [22.349963552442226, 40.083953019477164],
  },
  {
    title: 'Story of Kuniya and Liru',
    location: 'Uluru, Australia',
    story_type: 'myth',
    story:
      'In the Anangu Dreamtime story of Kuniya and Liru, the two ancestral beings, Kuniya the python woman and Liru the poisonous snake man, fought a deadly battle at Uluru. Kuniya’s nephew was killed by Liru’s warriors, so she avenged him by attacking Liru, leaving marks on the rock that are still visible today. These scars represent Kuniya’s spiritual presence, which the Anangu believe still resides within Uluru.',
    authorId: 1,
    latlong: [131.03491418245696, -25.342980739469155],
  },
  {
    title: 'Story of Konohanasakuya-hime',
    location: 'Mount Fuji, Japan',
    story_type: 'myth',
    story:
      'The Story of Konohanasakuya-hime tells of a beautiful princess who came down from the heavens and married the god Ninigi, the grandson of the sun goddess Amaterasu. Konohanasakuya-hime became pregnant quickly, leading Ninigi to suspect infidelity. To prove her loyalty, she entered a burning hut, promising that if her children survived, it would confirm her faithfulness. They survived, symbolizing her purity and deep connection to the mountain, where she is honored as a kami.',
    authorId: 1,
    latlong: [138.72748050825, 35.36393510777325],
  },
  {
    title: 'Battle of Horus and Set',
    location: 'Giza Plateau, Egypt',
    story_type: 'myth',
    story:
      "The Battle of Horus and Set is one of Egypt's most famous myths. After Osiris was killed by his brother Set, his son Horus sought to reclaim his father’s throne. Their final battle took place near the Giza Plateau, where Horus ultimately triumphed and established divine order. It’s said that the Sphinx represents Horus and stands as a protective symbol for Egypt, watching over the pharaohs buried in the pyramids.",
    authorId: 1,
    latlong: [31.13282269105073, 29.977603586619853],
  },
  {
    title: 'The Wooing of Étaín',
    location: 'Newgrange, Ireland',
    story_type: 'myth',
    story:
      'In The Wooing of Étaín, the god of love, Aengus, claimed Newgrange (Brú na Bóinne as his residence. Aengus used magic to trick his father, the Dagda, into giving him the home “for day and night,” essentially claiming it for eternity. Aengus also rescued Étaín, a beautiful maiden, and the two are said to have lived happily in this supernatural home, which is aligned with the winter solstice sunrise.',
    authorId: 1,
    latlong: [-6.475502428867886, 53.69484212421176],
  },
  {
    title: "Robin Hood's Archery Contest",
    location: 'Clumber Park, Sherwood Forest, Nottinghamshire, England',
    story_type: 'legend',
    story:
      'In the tale of the Archery Contest, Robin Hood and his Merry Men attended an archery competition held by the Sheriff of Nottingham. Disguised as a common archer, Robin won the contest, impressing the crowd with his remarkable skills. When he revealed his true identity, chaos ensued, leading to a thrilling chase through Sherwood Forest, solidifying his status as a folk hero.',
    authorId: 1,
    latlong: [-1.0772, 53.2234],
  },
  {
    title: 'The Legend of El Dorado',
    location: 'Lake Guatavita, Cundinamarca, Colombia',
    story_type: 'legend',
    story:
      'The tale of El Dorado recounts how the Muisca king would cover himself in gold dust and, in a ceremonial ritual, sail onto Lake Guatavita in a raft, where he would make offerings of gold and precious items to the gods. This practice led to the myth of a city of gold, sparking Spanish explorations in the 16th century.',
    authorId: 1,
    latlong: [-73.8016, 4.9784],
  },
  {
    title: 'The Conception of King Arthur',
    location: 'Tintagel Castle, Cornwall, England',
    story_type: 'legend',
    story:
      "In the tale of Arthur's Conception, Uther Pendragon, under the enchantment of Merlin, transformed into the Duke of Cornwall to be with Igraine, the duke's wife. Their union at Tintagel Castle led to the birth of Arthur, symbolizing the blend of magic and royalty, a key theme in Arthurian legend.",
    authorId: 1,
    latlong: [-4.7589, 50.6664],
  },
  {
    title: "Vlad the Impaler's Banquet",
    location: 'Bran Castle, Transylvania, Romania',
    story_type: 'legend',
    story:
      "The gruesome tale of Vlad the Impaler recounts how he invited enemies to a banquet at Bran Castle, only to execute them in a horrifying display to instill fear among his foes. This brutal act contributed to the transformation of Vlad's historical persona into the fictional character of Dracula, merging horror with history.",
    authorId: 1,
    latlong: [25.3675, 45.5153],
  },
  {
    title: 'The Legend of the Kappa',
    location: 'Kawagoe, Saitama Prefecture, Japan',
    story_type: 'folktale',
    story:
      'In Japanese folklore, the Kappa is a water spirit known for its mischievous and sometimes malevolent behavior. One tale tells of a Kappa that abducted children who wandered near rivers. To protect themselves, villagers offered the Kappa cucumbers, its favorite food. The Kappa would release any child it had taken in exchange for cucumbers, leading to the belief that Kappas are both protectors and tricksters of the waterways.',
    authorId: 1,
    latlong: [139.486, 35.9207],
  },
  {
    title: 'The Pied Piper of Hamelin',
    location: 'Marktkirche, Hamelin, Lower Saxony, Germany',
    story_type: 'folktale',
    story:
      'In this tale, the town of Hamelin is plagued by a rat infestation. A mysterious piper appears and offers to rid the town of its rodents for a fee. He plays his pipe, leading the rats to the river, where they drown. When the townspeople refuse to pay him, he uses his magic pipe to lure away the children of Hamelin, never to be seen again. This story warns of the consequences of breaking promises.',
    authorId: 1,
    latlong: [9.3327, 52.1064],
  },
  {
    title: 'The Tale of Peter Rabbit',
    location: 'Sarehole Mill, Birmingham, England',
    story_type: 'folktale',
    story:
      "In Beatrix Potter's beloved tale, mischievous Peter Rabbit sneaks into Mr. McGregor's garden to steal vegetables. After several narrow escapes, he learns the importance of listening to his mother and staying out of trouble. This story reflects themes of curiosity, adventure, and the consequences of disobedience.",
    authorId: 1,
    latlong: [-1.8402, 52.4251],
  },
  {
    title: 'The Girl Who Trod on a Loaf',
    location: 'Battersea Park, London, England',
    story_type: 'folktale',
    story:
      'In this story, a poor girl uses a loaf of bread as a stepping stone while crossing a muddy path in Battersea Park. As punishment for her wastefulness, she is transformed into a goose. The tale serves as a cautionary reminder about appreciating what you have and not wasting food.',
    authorId: 2,
    latlong: [-0.1453, 51.4752],
  },
  {
    title: 'The Bell Witch',
    location: 'Adams, Tennessee, USA',
    story_type: 'ghost story',
    story:
      "The Bell Witch haunting is one of America's most famous and eerie ghost stories. It revolves around the Bell family, who lived in rural Tennessee in the early 19th century. The family began experiencing strange phenomena in their home, such as unexplained knocking, whispers, and objects being moved. The disturbances escalated, with a sinister entity claiming to be the spirit of a local woman named Kate Batts, who had a vendetta against the Bell family. Over time, the hauntings became more violent, and many witnesses claimed to have seen the entity in the form of a shadowy figure or heard its disturbing voice. The Bell Witch is said to have tormented the family for years before mysteriously disappearing, with some believing it still haunts the area today. The Bell Witch Cave in Adams, Tennessee, is a popular location for those seeking to experience the chilling presence of the legendary ghost.",
    authorId: 2,
    latlong: [-87.1431, 36.4492],
  },
  {
    title: 'La Llorona',
    location: 'Lake Xochimilco, Mexico City, Mexico',
    story_type: 'ghost story',
    story:
      "La Llorona, or 'The Weeping Woman,' is a tragic and terrifying ghost story from Mexican folklore. The tale centers on a woman named Maria, who drowned her own children in a fit of rage and despair after being abandoned by her husband. Realizing the horror of her actions, Maria threw herself into the river in grief, but she was never able to find peace. Her ghost is said to wander the banks of rivers, lakes, and streams, crying for her lost children. Witnesses report hearing her sorrowful wails, 'Ay, mis hijos!' ('Oh, my children!' in the dead of night, and some claim to have seen her apparition, a woman in white, floating by the water. The legend is particularly strong in Mexico City, near the eerie waters of Lake Xochimilco, where locals warn children to stay away after dark to avoid encountering La Llorona's ghost.",
    authorId: 2,
    latlong: [-99.18, 19.247],
  },
  {
    title: 'The Grey Lady of Hampton Court',
    location: 'Hampton Court Palace, London, England',
    story_type: 'ghost story',
    story:
      'Hampton Court Palace, a historic royal residence, is famously haunted by the Grey Lady, believed to be the ghost of Sybil Penn, a servant to Queen Elizabeth I. Sybil was said to have been very close to the royal family, particularly the queen, and after her death, her spirit reportedly remained in the palace. Many visitors and staff claim to have seen her ghostly figure walking through the corridors of the palace, draped in a grey gown. The Grey Lady is often seen near the clock tower, and some say she vanishes as soon as she is noticed. Her restless spirit is thought to be searching for something lost, and her presence is particularly felt in the quieter, more isolated parts of the palace, where the chill of her ghostly form can sometimes be felt by those who wander too close.',
    authorId: 2,
    latlong: [-0.3369, 51.3984],
  },
  {
    title: 'The Black Monk of Pontefract',
    location: 'Pontefract, West Yorkshire, England',
    story_type: 'ghost story',
    story:
      'The Black Monk of Pontefract is one of the most disturbing ghost stories in British folklore. The haunting began in 1966 in a house on East Drive, Pontefract, when the Pritchard family moved in and experienced a series of terrifying supernatural events. Objects moved on their own, lights flickered, and a dark, oppressive figure would appear in the house, often described as a tall, hooded monk dressed in black. The entity became more violent over time, with reports of physical attacks on the family members, including scratches, bruises, and even being thrown across rooms. The ghost is believed to be the spirit of a monk who was executed in the area centuries ago, and his vengeful presence is said to still haunt the house. The Black Monk has gained fame as one of the most aggressive and unsettling spirits in the UK, and the house remains a place of dark curiosity for those fascinated by the paranormal.',
    authorId: 2,
    latlong: [-1.303, 53.6925],
  },
  {
    title: 'The Ghost of the Crying Boy',
    location: 'Ibiza, Spain',
    story_type: 'ghost story',
    story:
      'Ibiza, known for its vibrant nightlife and scenic beaches, is also home to a haunting tale involving the Ghost of the Crying Boy. The story is tied to a famous painting that was said to have been created by an unknown artist during the 1980s. The painting, which depicts a sad-eyed boy, became notorious for its supposed curse. Several owners of the painting, after acquiring it, reported experiencing unexplained fires in their homes, despite no clear cause of ignition. These fires would often destroy everything except the painting itself, which would remain unharmed. Locals began to whisper that the spirit of the boy in the painting was vengeful, and his ghost would manifest as cries heard in the night. The Crying Boy became a symbol of misfortune and a reminder that not all art brings beauty into the world. The legend continues to linger in the island’s folklore, especially around the older, more isolated parts of Ibiza.',
    authorId: 2,
    latlong: [1.4214, 38.982],
  },
  {
    title: 'The Ghost of Anne Boleyn',
    location: 'Tower of London, London, England',
    story_type: 'ghost story',
    story:
      'The ghost of Anne Boleyn, the second wife of King Henry VIII, is said to haunt the Tower of London, where she was executed in 1536. Witnesses report seeing her apparition wandering the grounds, often dressed in white and carrying her head under her arm. Her ghost is believed to appear particularly near the chapel where she was buried.',
    authorId: 2,
    latlong: [-0.0759, 51.5081],
  },
  {
    title: 'The Woman in White',
    location: 'San Antonio River Walk, San Antonio, Texas, USA',
    story_type: 'ghost story',
    story:
      'Legend has it that a woman in white haunts the banks of the San Antonio River. She is believed to be the spirit of a heartbroken bride who drowned herself after her fiancé left her at the altar. Sightings of her ghostly figure wandering along the riverbank have been reported for decades, often accompanied by an eerie sense of sadness.',
    authorId: 2,
    latlong: [-98.486, 29.4252],
  },
  {
    title: 'The Headless Horseman',
    location: 'Sleepy Hollow, New York, USA',
    story_type: 'ghost story',
    story:
      "Inspired by Washington Irving's story, the legend of the Headless Horseman is said to haunt the area of Sleepy Hollow. The ghost is believed to be the spirit of a Hessian soldier who lost his head during the Revolutionary War. Locals claim to hear the galloping of hooves and see the ghost riding through the town, searching for his missing head.",
    authorId: 2,
    latlong: [-73.864444, 41.091944],
  },
  {
    title: 'La Llorona',
    location: 'Rio Grande, New Mexico, USA',
    story_type: 'ghost story',
    story:
      "La Llorona, or 'The Weeping Woman,' is a popular ghost story in Mexican-American folklore. According to legend, she is the spirit of a mother who drowned her children in a fit of rage and now wanders near rivers, crying for them. In New Mexico, sightings of her ghost near the Rio Grande have led to tales of eerie cries echoing at night.",
    authorId: 2,
    latlong: [-106.6504, 35.0844],
  },
  {
    title: 'The Brown Lady of Raynham Hall',
    location: 'Raynham Hall, Norfolk, England',
    story_type: 'ghost story',
    story:
      'The Brown Lady of Raynham Hall is one of the most famous ghosts in England. Sightings of her spectral figure, dressed in a brown dress, date back to the 18th century. She is believed to be the spirit of Lady Dorothy Walpole, who died under mysterious circumstances. Photographs taken at the hall have captured her apparition, furthering her legend.',
    authorId: 2,
    latlong: [0.4035, 52.6975],
  },
  {
    title: 'Signing of the Declaration of Independence',
    location: 'Independence Hall, Philadelphia, Pennsylvania, USA',
    story_type: 'historic fact',
    story:
      "On July 4, 1776, the Second Continental Congress officially adopted the Declaration of Independence in Independence Hall. This pivotal document announced the thirteen American colonies' separation from British rule and laid the groundwork for the United States of America.",
    authorId: 2,
    latlong: [-75.1486, 39.9489],
  },
  {
    title: 'The Fall of the Berlin Wall',
    location: 'East Side Gallery, Berlin, Germany',
    story_type: 'historic fact',
    story:
      'The Berlin Wall, which divided East and West Berlin from 1961 to 1989, fell on November 9, 1989. This event symbolized the end of the Cold War and the reunification of Germany. Today, the East Side Gallery stands as a memorial to this significant moment in history, featuring murals painted on remnants of the wall.',
    authorId: 3,
    latlong: [13.4251, 52.5036],
  },
  {
    title: 'First Successful Heart Transplant',
    location: 'Groote Schuur Hospital, Cape Town, South Africa',
    story_type: 'historic fact',
    story:
      'On December 3, 1967, Dr. Christiaan Barnard performed the first successful heart transplant at Groote Schuur Hospital. The surgery marked a significant milestone in medical history, paving the way for advances in cardiac surgery and organ transplantation.',
    authorId: 3,
    latlong: [18.4233, -33.9258],
  },

  {
    title: 'The Battle of Gettysburg',
    location:
      'Gettysburg National Military Park, Gettysburg, Pennsylvania, USA',
    story_type: 'historic fact',
    story:
      "The Battle of Gettysburg, fought from July 1 to July 3, 1863, was a turning point in the American Civil War. It marked the largest number of casualties in the war and resulted in a Union victory, ultimately leading to President Abraham Lincoln's famous Gettysburg Address delivered at the dedication of the Soldiers' National Cemetery.",
    authorId: 3,
    latlong: [-77.2295, 39.8309],
  },
  {
    title: "The Discovery of Tutankhamun's Tomb",
    location: 'Valley of the Kings, Luxor, Egypt',
    story_type: 'historic fact',
    story:
      'On November 4, 1922, British archaeologist Howard Carter discovered the nearly intact tomb of Pharaoh Tutankhamun in the Valley of the Kings. This remarkable find unveiled a wealth of artifacts and treasures, providing invaluable insight into ancient Egyptian civilization and the life of the young pharaoh.',
    authorId: 3,
    latlong: [32.6019, 25.7402],
  },
  {
    title: 'The Ghost of the Stanley Hotel',
    location: 'Stanley Hotel, Estes Park, Colorado, USA',
    story_type: 'urban legend',
    story:
      "The Stanley Hotel is said to be haunted by its original owner, F.O. Stanley, and other spirits. Guests have reported hearing piano music from the closed ballroom, and many have claimed to see apparitions in their rooms. The hotel's eerie reputation inspired Stephen King's novel 'The Shining,' further embedding it in popular culture.",
    authorId: 3,
    latlong: [-105.5047, 40.5207],
  },
  {
    title: 'The Vanishing Hitchhiker',
    location: 'Route 66, Chicago, Illinois, USA',
    story_type: 'urban legend',
    story:
      'The Vanishing Hitchhiker is a popular urban legend where drivers pick up a young woman hitchhiking along Route 66. After driving her home, they turn to speak to her, only to find she has disappeared, often leaving behind a piece of clothing or a personal item. The story reflects themes of loss and the supernatural.',
    authorId: 3,
    latlong: [-87.6298, 41.8781],
  },
  {
    title: 'The Chupacabra',
    location: 'Puerto Rico',
    story_type: 'urban legend',
    story:
      "The Chupacabra, or 'goat-sucker,' is a legendary creature reported to drain the blood of livestock, particularly goats. First reported in Puerto Rico in the 1990s, sightings of this mysterious creature have sparked numerous tales and theories, contributing to its status as a modern urban legend throughout Latin America and beyond.",
    authorId: 3,
    latlong: [-66.5901, 18.2208],
  },
  {
    title: 'The Slit-Mouthed Woman (Kuchisake-onna',
    location: 'Kagawa Prefecture, Japan',
    story_type: 'urban legend',
    story:
      'Kuchisake-onna is a Japanese urban legend about a woman who wears a surgical mask and asks passersby if she is beautiful. If they say yes, she reveals her mutilated mouth and asks the question again. If they say no, she kills them. The legend reflects societal fears and has become a popular horror story in Japan.',
    authorId: 3,
    latlong: [134.0446, 34.3403],
  },
  {
    title: 'The Wendigo',
    location: 'Algonquin Provincial Park, Ontario, Canada',
    story_type: 'urban legend',
    story:
      'The Wendigo is a mythical creature from Algonquin folklore, said to be a malevolent spirit associated with winter and starvation. Stories tell of individuals who, driven by greed or hunger, transform into Wendigos after resorting to cannibalism. This legend serves as a cautionary tale about the consequences of insatiable greed.',
    authorId: 3,
    latlong: [-78.445, 45.586],
  },
  {
    title: 'The Roswell Incident',
    location: 'Roswell, New Mexico, USA',
    story_type: 'aliens',
    story:
      "In July 1947, an unidentified object crashed near Roswell, leading to speculation that it was an extraterrestrial spacecraft. The U.S. military initially reported it as a 'flying disc,' but later claimed it was a weather balloon. This incident sparked widespread conspiracy theories and remains one of the most famous UFO events in history.",
    authorId: 3,
    latlong: [-104.523, 33.3943],
  },
  {
    title: 'The Phoenix Lights',
    location: 'Phoenix, Arizona, USA',
    story_type: 'aliens',
    story:
      'On March 13, 1997, thousands of people in Phoenix reported seeing a series of lights in a V-shaped formation moving silently across the sky. Witnesses described the lights as part of a massive craft. The incident was investigated by the military, which claimed they were flares, but many remain convinced it was a UFO sighting.',
    authorId: 3,
    latlong: [-112.074, 33.4484],
  },
  {
    title: 'The Rendlesham Forest Incident',
    location: 'Rendlesham Forest, Suffolk, England',
    story_type: 'aliens',
    story:
      "Between December 26 and 28, 1980, multiple U.S. Air Force personnel reported witnessing strange lights and a triangular craft in Rendlesham Forest. The incident is often referred to as 'Britain's Roswell' and includes detailed eyewitness accounts and physical evidence. It remains one of the most credible UFO sightings in history.",
    authorId: 3,
    latlong: [1.4076, 52.295],
  },
  {
    title: 'The Westall UFO Encounter',
    location: 'Westall High School, Melbourne, Australia',
    story_type: 'aliens',
    story:
      'On April 6, 1966, over 200 students and teachers at Westall High School reported seeing a flying saucer hovering over the school and nearby fields. The object was described as a silver disc that took off quickly, leaving witnesses confused and skeptical. The incident is one of the largest mass UFO sightings in Australia.',
    authorId: 4,
    latlong: [145.103, -37.9003],
  },
  {
    title: 'The Tic Tac UFO Encounter',
    location: 'Off the Coast of San Diego, California, USA',
    story_type: 'aliens',
    story:
      "In 2004, U.S. Navy pilots encountered an unidentified flying object resembling a 'Tic Tac' mint while training off the coast of San Diego. The object exhibited advanced flight capabilities and was captured on video. The incident was later acknowledged by the Pentagon, leading to renewed interest in UFOs and unidentified aerial phenomena (UAP.",
    authorId: 4,
    latlong: [-117.1611, 32.7157],
  },
  {
    title: 'The Wild Rover',
    location: 'Dublin, Ireland',
    story_type: 'song',
    story:
      'The Wild Rover is a traditional Irish folk song that tells the story of a young man who has spent his life drinking and enjoying himself but decides to return home and seek redemption. The song is popular in pubs and is often sung in celebration, representing the vibrant culture of Dublin.',
    authorId: 4,
    latlong: [-6.2603, 53.3498],
  },
  {
    title: 'Empire State of Mind',
    location: 'New York City, New York, USA',
    story_type: 'song',
    story:
      'Performed by Jay-Z and Alicia Keys, Empire State of Mind celebrates the spirit and energy of New York City. The song highlights iconic locations like Brooklyn, Harlem, and the bright lights of Times Square, encapsulating the aspirations and dreams associated with the city.',
    authorId: 4,
    latlong: [-74.006, 40.7128],
  },
  {
    title: 'La Bamba',
    location: 'Veracruz, Mexico',
    story_type: 'song',
    story:
      "La Bamba is a traditional Mexican folk song that originated in the state of Veracruz. The song gained international fame through Ritchie Valens' rock and roll rendition in 1958. It celebrates Mexican culture and dance and is often performed at festive occasions.",
    authorId: 4,
    latlong: [-96.1343, 19.1738],
  },
  {
    title: 'Gangnam Style',
    location: 'Gangnam District, Seoul, South Korea',
    story_type: 'song',
    story:
      'Gangnam Style, performed by PSY, became a global sensation in 2012. The song satirizes the lavish lifestyle associated with the affluent Gangnam District of Seoul. Its catchy beat and memorable dance moves made it an iconic representation of contemporary Korean pop culture.',
    authorId: 4,
    latlong: [127.0473, 37.5172],
  },

  {
    title: 'Sweet Home Alabama',
    location: 'Alabama, USA',
    story_type: 'song',
    story:
      'Written by Lynyrd Skynyrd, Sweet Home Alabama is a Southern rock anthem that celebrates the state of Alabama. The song reflects pride in Southern heritage and culture while addressing social issues of its time. It has become a beloved song in American music history.',
    authorId: 4,
    latlong: [-86.7911, 32.806],
  },
  {
    title: 'The Story of Vikram and Betal',
    location: 'Delhi, India',
    story_type: 'fairy tale',
    story:
      "Vikram and Betal is a legendary Indian tale that comes from the rich folklore of India. It follows the brave King Vikramaditya, who is tasked with the impossible challenge of capturing Betal, a vampire-like spirit that haunts a desolate forest. Betal resides in the form of a bat, perched upon Vikram's shoulder, and tells him mysterious stories that come with complex riddles. Each time Vikram answers wrong or falls silent, Betal flies away, and Vikram must start his pursuit all over again. The stories told by Betal often present profound moral dilemmas and life lessons, testing the king's wisdom, courage, and ethical decisions. These stories weave together a tapestry of justice, truth, and sacrifice, with Vikram’s unwavering resolve showing the value of knowledge and perseverance. The setting of these events, in the heart of the northern Indian subcontinent, provides a mystical backdrop for the epic tale.",
    authorId: 4,
    latlong: [77.209, 28.6139],
  },
  {
    title: 'The Legend of the Boto',
    location: 'Amazon River, Brazil',
    story_type: 'fairy tale',
    story:
      "The Legend of the Boto is one of Brazil’s most cherished and mysterious myths. It originates from the Amazon River, deep in the heart of the jungle, where locals speak of a magical pink river dolphin. According to the legend, the Boto has the ability to transform into a handsome man during the night. He emerges from the waters, dressed in white, and seduces young women with his charm and allure. Once the Boto has enchanted his victim, he leaves her with a child and returns to the river. The legend has been passed down through generations to explain unplanned pregnancies, especially in remote villages along the Amazon. In some versions, the Boto is depicted as a benevolent figure, while in others, he is considered a trickster. The legend highlights themes of temptation, mystery, and the power of nature, with the vast Amazon River serving as the perfect backdrop for the mythical creature's enchanting and elusive behavior.",
    authorId: 4,
    latlong: [-63.6167, -3.119],
  },
  {
    title: 'The Legend of the White Snake',
    location: 'Hangzhou, China',
    story_type: 'fairy tale',
    story:
      'The Legend of the White Snake is an ancient Chinese tale that tells the passionate yet tragic love story between a mortal man, Xu Xian, and a woman named Bai Suzhen, who is secretly a white snake spirit. According to the legend, Bai Suzhen transforms into a beautiful woman and falls deeply in love with Xu Xian, a kind-hearted man. They marry and live happily, but their bliss is short-lived. A monk named Fahai discovers her true nature and believes she is a danger to humanity, seeking to break the couple apart. Fahai forces Bai Suzhen to reveal her true form, and she is imprisoned under a mountain for eternity as punishment. The tale explores the complexities of love, fate, and the eternal struggle between good and evil. Hangzhou, with its picturesque West Lake and ancient temples, provides the ideal setting for this mystical and bittersweet story.',
    authorId: 4,
    latlong: [120.1551, 30.2741],
  },
  {
    title: 'The Firebird',
    location: 'Moscow, Russia',
    story_type: 'fairy tale',
    story:
      'The Firebird is a renowned Russian fairy tale that speaks of magic, destiny, and the pursuit of the impossible. The story revolves around a young prince who is tasked with capturing the elusive and powerful Firebird, a mythical creature with glowing feathers that can light up the night sky. The Firebird is both a symbol of fortune and a harbinger of misfortune, and its capture brings both blessings and peril. The prince embarks on a perilous journey, facing numerous challenges along the way, including a treacherous sorcerer and various mystical creatures. With each encounter, the prince learns more about courage, wisdom, and sacrifice. In the end, he realizes that the true treasure is not the Firebird itself, but the lessons he has learned during his quest. The magical and haunting landscape of Russia, from the vast forests to the frozen steppes, adds depth to this adventurous tale, with the grand city of Moscow serving as a symbolic center for the story’s unfolding.',
    authorId: 4,
    latlong: [37.6173, 55.7558],
  },
  {
    title: 'The Tsarevna Frog',
    location: 'Suzdal, Russia',
    story_type: 'fairy tale',
    story:
      'The Tsarevna Frog is a classic Russian fairy tale that blends magic, transformation, and love. The tale begins with a Tsar who has three sons and tasks them with shooting arrows to determine who will inherit the throne. The youngest son, who is often perceived as the least capable, is the one who shoots his arrow the farthest. To the surprise of his family, his arrow lands in a pond where a frog appears and turns into a beautiful princess. She reveals herself as a cursed Tsarevna, and only by marrying her can the prince break the curse. The story is rich with symbolism, exploring themes of inner beauty, transformation, and the importance of looking beyond appearances. Set in the scenic town of Suzdal, with its ancient wooden churches and tranquil rivers, the tale captures the essence of Russia’s mystical folklore, where magic and reality often collide.',
    authorId: 5,
    latlong: [40.4673, 56.497],
  },
  {
    title: 'The Banshee',
    location: 'Kilkee, County Clare, Ireland',
    story_type: 'folktale',
    story:
      'The Banshee, a wailing spirit of death, is a well-known figure in Irish folklore, particularly in the remote coastal town of Kilkee in County Clare. The legend tells of a pale, sorrowful woman whose haunting cries are said to foretell the death of a family member. In Kilkee, locals believe the Banshee appears when a death is imminent, her mournful wail echoing across the cliffs near the Atlantic coast. Often described as a beautiful woman with long flowing hair or as an old, crone-like figure, she is said to appear near homes in the dead of night, shrieking a warning of the upcoming tragedy. The Banshee’s cry is said to be so chilling that it leaves a lingering sense of dread in those who hear it, and many old families in Kilkee have tales of her presence, still recounting stories of her visits in the stormy nights along the wild west coast of Ireland.',
    authorId: 5,
    latlong: [-9.4107, 52.6514],
  },
  {
    title: 'The Black Volga',
    location: 'Kiev, Ukraine',
    story_type: 'folktale',
    story:
      'The Black Volga is a chilling folk legend that originated in the Soviet Union, particularly in the city of Kiev, Ukraine. The tale revolves around a mysterious black car—often a Volga, a luxury Soviet-era vehicle—that would silently appear in the streets, typically at night. According to the legend, the car would abduct people, particularly children, and disappear without a trace. Some believed it was driven by wealthy or influential individuals involved in the occult, while others thought the car was connected to secret police operations. The Black Volga was said to be a symbol of power and death, and some versions of the story claim that the car was used to transport the souls of the dead. Locals reported hearing its engine in the dead of night, its eerie black shape emerging from the shadows to claim its next victim. The legend still haunts the imagination of people in Kiev, particularly in the darker corners of the city near old, crumbling buildings.',
    authorId: 5,
    latlong: [30.55308, 50.4501],
  },
  {
    title: 'The Crying Boy Painting',
    location: 'Ibiza, Spain',
    story_type: 'folktale',
    story:
      'The Crying Boy is a notorious painting that became the subject of a disturbing urban legend in Ibiza, Spain. The painting, which features a sad-eyed boy, was believed to carry a curse that would bring misfortune and destruction to anyone who owned it. The legend began in the 1980s when a series of house fires were reported to occur mysteriously in homes where the painting was displayed. Despite the homes being burned to the ground, the painting was always found unharmed. Locals began to whisper that the spirit of the boy in the painting was a restless ghost, and his tears were a warning of impending doom. The curse was said to follow those who owned the painting, causing them to lose everything to fire, and the legend has persisted in the island’s folklore, with the eerie tale still sending shivers down the spines of those living in the quieter, older parts of Ibiza.',
    authorId: 5,
    latlong: [-1.4214, 38.982],
  },
  {
    title: 'The Night Marchers',
    location: 'Kailua, Oahu, Hawaii, USA',
    story_type: 'folktale',
    story:
      'The Night Marchers are the ghosts of ancient Hawaiian warriors, said to march across the islands of Hawaii, including the area near Kailua on the island of Oahu. These spirits are believed to be the restless souls of royal warriors who once fought to protect their lands and chiefs. The legend says that the Night Marchers appear on dark nights, marching in a procession, their chanting and drumming echoing through the air. It is said that those who are unlucky enough to encounter them must either avoid eye contact or lie face down on the ground to avoid being struck down by their supernatural power. The marchers are most commonly seen near sacred sites and old battlefields, and locals believe that their presence is a warning or an omen. Many say that if you hear the sounds of drumming or the chanting of warriors, it is best to stay inside, as the marchers will not hesitate to harm those who cross their path.',
    authorId: 5,
    latlong: [-157.7351, 21.3965],
  },
  {
    title: 'The Tale of the Flying Dutchman',
    location: 'Cape of Good Hope, South Africa',
    story_type: 'legend',
    story:
      'The legend of the Flying Dutchman is a maritime tale that has been passed down through generations in the Cape of Good Hope, South Africa. According to the legend, a Dutch ship, the *Vrouw Maria*, was caught in a fierce storm and cursed to sail the seas forever, unable to find port. The ghost ship, crewed by spirits, is said to appear off the coast during storms, with eerie lights and a haunting, spectral presence. Sailors and fishermen in the area report sightings of the ghost ship, which brings bad luck to those who encounter it. It’s said that anyone who sees the Flying Dutchman will soon meet their doom or suffer a terrible fate.',
    authorId: 5,
    latlong: [18.47338748004137, -34.355199491207216],
  },
  {
    title: 'El Silbón (The Whistler',
    location: 'Los Llanos, Venezuela',
    story_type: 'folktale',
    story:
      'El Silbón is a terrifying figure in Venezuelan folklore, particularly in the Llanos region. The legend tells of a young man who killed his father in a fit of rage, and for his crime, he was cursed to wander the plains as a ghost. His punishment is that he must carry his father’s bones in a sack, and he is constantly heard whistling as he walks. The eerie whistling sound echoes across the fields at night, and villagers know that El Silbón is near. It is said that if the whistle is heard close by, the spirit is far away, but if the sound is faint, it’s dangerously close. His presence is a harbinger of death, and anyone who encounters him is said to be doomed.',
    authorId: 5,
    latlong: [-68.0028, 7.7963],
  },
  {
    title: 'The Legend of La Llorona',
    location: 'Lake Atitlán, Guatemala',
    story_type: 'legend',
    story:
      "La Llorona, 'The Weeping Woman', is a ghostly figure from Latin American folklore, and her story has been passed down through generations. The legend tells of a beautiful woman named Maria who drowned her children in a fit of madness and grief after being abandoned by her husband. Consumed by guilt, Maria drowned herself in Lake Atitlán, but her spirit is said to still wander the shores of the lake, crying for her lost children. People report hearing her wails in the night, echoing across the waters. The legend of La Llorona is often told to children to keep them away from the lake after dark, and her cries are considered an omen of death.",
    authorId: 5,
    latlong: [-91.2202, 14.67],
  },
  {
    title: 'The Aswang',
    location: 'Capiz, Philippines',
    story_type: 'myth',
    story:
      'The Aswang is one of the most feared creatures in Filipino mythology, especially in the province of Capiz. The Aswang is a shape-shifting monster that can take on the form of a woman by day but transforms into a terrifying creature at night. It is said to have a penchant for eating flesh, especially that of children, and can suck blood or consume the organs of its victims. The creature is most commonly described as having long, sharp claws and a very strong sense of smell. Locals in Capiz believe that the Aswang lurks in the shadows of their rural towns, preying on the unwary. The fear of the Aswang is so deeply embedded in Capiz that many people there still avoid walking alone at night.',
    authorId: 5,
    latlong: [123.0062187847868, 11.479082683479593],
  },
  {
    title: 'The Shadow of the Djinn',
    location: "Rub' al Khali (Empty Quarter, Saudi Arabia",
    story_type: 'myth',
    story:
      "In the vast, desolate Rub' al Khali (Empty Quarter of Saudi Arabia, there are stories of the Djinn, supernatural beings made of smokeless fire. The Djinn are said to inhabit remote and inhospitable places, and their presence is often associated with misfortune and madness. According to legend, the Djinn in the Empty Quarter are especially dangerous, with the power to possess travelers who stray too far from their camp or who wander in the scorching heat. The Djinn are said to leave behind a strange shadow or mirage, leading the lost to believe they’re seeing an oasis or a way out, only to find themselves deeper in the endless desert. Those who encounter these spirits are often driven mad or vanish without a trace.",
    authorId: 5,
    latlong: [49.433165066940575, 20.745891496271685],
  },
  {
    title: 'The Mokele-Mbembe',
    location: 'Lake Tele, Republic of the Congo',
    story_type: 'myth',
    story:
      'The Mokele-Mbembe is a creature said to inhabit the remote swamps and lakes of the Congo Basin, particularly Lake Tele. Described as a large, dinosaur-like creature, it is believed to resemble a sauropod, with a long neck and tail. Local tribes speak of the Mokele-Mbembe as a river guardian, capable of dragging boats and people into the depths of the water. Despite numerous expeditions to find physical evidence of the creature, it remains elusive, existing mostly in the realm of myth. However, the Mokele-Mbembe continues to intrigue cryptozoologists and explorers, who believe it may be the last living relic of an ancient age.',
    authorId: 5,
    latlong: [16.6541, 2.1684],
  },
  {
    title: 'The Headless Horseman of Al-‘Ula',
    location: 'Al-‘Ula, Saudi Arabia',
    story_type: 'ghost story',
    story:
      'In the ancient desert town of Al-‘Ula, Saudi Arabia, there is a haunting tale of a headless ghost rider who is said to haunt the rocky hills and canyons near the town. The legend tells of a warrior who was decapitated in battle and returned as a vengeful spirit. At night, his ghostly figure is seen riding a horse without a head, searching for his lost body and seeking revenge on those who wronged him. Locals avoid the area at night, claiming that the sound of galloping hooves and the sight of the rider without a head bring a chilling sense of dread. The Headless Horseman is a constant reminder of the horrors of war and the restless spirits it leaves behind.',
    authorId: 5,
    latlong: [39.7701, 26.809],
  },
  {
    title: 'Chaneques',
    location: 'Veracruz, Mexico',
    story_type: 'folktale',
    story:
      'In the forests of Veracruz, Mexico, the Chaneques are small, mischievous forest spirits that are known for causing trouble. The Chaneques are said to have the ability to lead people astray by creating illusions, making travelers lost in the dense woods. Some stories say that they steal children, while others claim that they can make people fall ill or cause accidents. The Chaneques are especially feared in the rural parts of Veracruz, where people are warned not to venture too far into the forest without offering respect to the spirits of the land. It is believed that if you are lost in the woods and hear the sound of laughter or footsteps behind you, it is the Chaneques playing tricks on you.',
    authorId: 5,
    latlong: [-96.0156, 19.2085],
  },
  {
    title: 'The Mantis Men',
    location: 'Namib Desert, Namibia',
    story_type: 'legend',
    story:
      'The Mantis Men are a chilling part of Namibian folklore, particularly in the Namib Desert. These tall, humanoid creatures are said to have the appearance of praying mantises, with long, spindly limbs and sharp, angular features. According to legend, they live in the deep, isolated corners of the desert and are known for their ability to hypnotize and capture unwary travelers. Those who wander too close to their territory are said to be ensnared by the Mantis Men, either to be consumed or trapped in a state of paralysis. Locals believe that the creatures are guardians of ancient desert secrets, and encountering them is considered a bad omen.',
    authorId: 5,
    latlong: [15.775, -23.4692],
  },
  {
    title: 'The Dragon of the Tian Shan Mountains',
    location: 'Tian Shan Mountains, Kazakhstan (near the Kyrgyzstan border',
    story_type: 'myth',
    story:
      'The Dragon of the Tian Shan is an ancient myth from the Tian Shan Mountains in Kazakhstan, extending into Kyrgyzstan. According to local folklore, a massive, serpentine dragon once lived in the mist-covered peaks of the mountains, guarding an ancient treasure hidden deep within the cliffs. The dragon was said to be so large that its wings could cause storms, and its roar could be heard echoing through the valleys. The legend says that the dragon was a guardian spirit, tasked with protecting the land and its people from invaders. Some stories claim that the creature still lives in the hidden caves of the mountains, waiting to awaken. In the culture of the nomadic tribes in the region, the dragon symbolizes strength, protection, and mystery, with many local rituals aimed at appeasing its spirit.',
    authorId: 5,
    latlong: [78.2024, 42.6744],
  },
  {
    title: 'The Huay Chivo',
    location: 'Huancavelica, Peru',
    story_type: 'folktale',
    story:
      'The Huay Chivo is a shapeshifting monster from the Andean region of Peru, particularly around **Huancavelica**. The legend tells of a man who practices black magic and can transform into a fearsome creature—half man, half goat. This transformation allows the Huay Chivo to roam the countryside under the cover of night, preying on livestock, and sometimes even on people. The creature is said to have glowing eyes and a terrifying scream, and it feeds on the blood of its victims. According to the myth, the Huay Chivo is able to take on the appearance of a normal person by day, making it impossible for anyone to distinguish between the monster and the average villager. Those who encounter it often never return, and it is said that one can recognize a Huay Chivo by the smell of sulfur that follows it.',
    authorId: 5,
    latlong: [-74.9353, -12.7715],
  },
  {
    title: 'El Culebrón',
    location: 'Iguazu Falls, Misiones Province, Argentina',
    story_type: 'legend',
    story:
      "El Culebrón is a fearsome serpent creature that haunts the waters around **Iguazu Falls** in **Misiones Province**, Argentina. The story tells of a gigantic, multi-headed serpent that lives in the deep pools of the river below the falls. El Culebrón is believed to be a guardian of the river, punishing those who disrespect the natural world or attempt to take too much from the land. According to the legend, the serpent rises from the water at night to claim its victims, dragging them into the depths of the river. The indigenous Guarani people believed that the falls were sacred, and they offered sacrifices to appease El Culebrón. Even today, the sound of rushing water is thought to be the serpent's hissing, and travelers are warned not to stray too close to the falls or risk encountering the beast.",
    authorId: 5,
    latlong: [-54.4368, -25.6959],
  },
  {
    title: 'The Korgool',
    location: 'Fergana Valley, Uzbekistan',
    story_type: 'folktale',
    story:
      "In the Fergana Valley, which spans Uzbekistan and Kyrgyzstan, the **Korgool** is a frightening creature said to haunt the steep mountain cliffs. The Korgool is described as a large, hairy humanoid figure with long claws and a mouth full of sharp teeth. It is said to live in caves and come down to the valley at night, where it preys on livestock and occasionally kidnaps children. According to the myth, the Korgool is a spirit of vengeance, angry at humans for their encroachment into the mountains, and it will punish those who wander too far from the safety of their villages. The Korgool is so feared in the region that even today, villagers will tell children to avoid the hills after dark, lest they fall victim to the creature's wrath.",
    authorId: 5,
    latlong: [71.2521, 40.0],
  },
  {
    title: 'La Llorona del Lago',
    location: 'Lake Titicaca, Bolivia',
    story_type: 'legend',
    story:
      'La Llorona del Lago (The Weeping Woman of the Lake is a tragic and haunting tale told along the shores of **Lake Titicaca** in Bolivia. According to the story, a woman named Maria drowned her children in a fit of jealousy and sorrow after her lover abandoned her. Consumed by guilt, Maria threw herself into the lake and drowned. Her spirit is said to still wander the shores of Lake Titicaca, weeping and calling for her lost children. Locals claim to hear her cries echoing across the water, especially during foggy nights. The tale is often used as a warning to children to stay close to their families, and it has been passed down through generations as part of Bolivian folk traditions.',
    authorId: 5,
    latlong: [-69.06537, -15.99248],
  },
  {
    title: "The Griot's Curse",
    location: 'Touba, Senegal, Western Africa',
    story_type: 'legend',
    story:
      "In Senegal, particularly around the ancient city of **Touba**, the legend of **The Griot's Curse** has been passed down for generations. Griots are respected oral historians and storytellers who carry the history of the people. The curse involves a Griot who was wronged by a powerful leader, and in revenge, he placed a curse on the town. According to the myth, anyone who speaks ill of the Griot's name will face misfortune, and the spirits of the Griots will haunt the offender, causing sickness, madness, or death. The curse is said to be strongest during the night, when the sound of the Griot’s drums can still be heard echoing in the wind. Many believe that the Griot’s curse continues to plague the descendants of those who betrayed him, ensuring that his legacy lives on.",
    authorId: 5,
    latlong: [-15.8815, 14.7672],
  },
  {
    title: 'The Zindis of Mauritania',
    location: 'Atar, Mauritania, Western Africa',
    story_type: 'myth',
    story:
      'The Zindis are mysterious, shape-shifting creatures from **Mauritania**, located in the western part of the Sahara Desert. According to local legend, the Zindis are a race of spirits that can take on the form of animals, including lions, snakes, and birds. They are believed to be ancient guardians of the desert, protecting sacred places and the nomadic tribes that roam the vast sands. Some versions of the legend describe the Zindis as tricksters, while others say they are benevolent spirits who help guide lost travelers. Locals believe that the Zindis can be summoned by those who know the ancient rites, and it is said that anyone who crosses paths with them is either blessed with great fortune or driven mad by their strange and unsettling presence.',
    authorId: 5,
    latlong: [-13.0178, 20.51],
  },
  {
    title: 'The Laughing Highwayman',
    location: 'Wimbledon Common and Putney Heath, Lodnon, United Kingdom',
    story_type: 'ghost story',
    story:
      'Wimbledon Common, Putney Heath and Putney Lower Common form a large area of heath land measuring 460 acres with an estimated million trees. This significant rural zone in Greater London is protected from being built upon by the 1871 Wimbledon and Putney Commons Act, however, the law does protect it from a reputation of being haunted by the notorious ‘The Laughing Highwayman’, Jerry Abershaw.\nLouis (Lewis Jeremiah Abershaw (born 1773 – died 3 August 1795 from the age of seventeen terrorized the roads running between his native Kingston upon Thames and London via Wimbledon, reputedly using the Bald Faced Stag Inn on Portsmouth Road in Kingston as the base for his gang (which included “Galloping Dick” Ferguson. Comparing Jerry to the Prime Minister it was said that ‘Abershaw takes their purses with pistols — Pitt with Parliament’. \nAccording to the Newgate Calendar: ‘At length he was brought to trial before Mr Baron Perryn, at Croydon, in the county of Surrey, on the 30th of July, 1795. On his way to Croydon to take his trial, the cavalcade passed over Kennington Common, and on its arriving on the spot where the executions at that time took place, Avershaw put his head out of the coach window, and in the peculiar flash style which be ever exhibited, asked the officers attending whether they “did not think that he should be TWISTED on that pretty spot by the next Saturday?”\nHe was charged on two indictments: one for having, at the Three Brewers public-house, Southwark, feloniously shot at and murdered D. Price, an officer belonging to the police office held at Union Hall, in the Borough; the other for having, at the same time and place, fired a pistol at Bernard Turner, another officer attached to the office at Union Hall, with an intent to murder him.\nMr Garrow, the leading counsel for the prosecution, opened his case to the Court and jury by stating that the prisoner at the bar, being a person of ill fame, had been suspected of having perpetrated a number of felonies. A warrant had been issued for his arrest by the Southwark magistrates, and D. Price [David Price], and B. Turner [Bernard Turner], officers belonging to Union Hall, were intrusted with its execution. Having received information that he was smoking and drinking in a public house in Southwark called the Three Brewers, at that time notorious as the resort of thieves and vagabonds, they repaired thither, and found their information to be correct; but they also found that the object of their search was fully prepared to put in execution his diabolical threats. On their approach he placed himself at the entrance to the parlour with a loaded pistol in each hand, vowing the instant death of any one who should attempt to take him. The officers, more valiant than prudent, rushed forward, expecting to throw him off his guard by the suddenness and vigour of their attack; in this, however, they were unhappily deceived — the ruffian discharged both the weapons at the same moment, by one of which Turner was severely wounded in the head, while the fatal contents of the other lodged in the body of the unfortunate Price, who languished a few hours in great agony and then died.\nThe jury, after a consultation of about three minutes, pronounced the verdict of guilty. Through a flaw in the indictment for the murder an objection was taken by counsel. This was urged nearly two hours, when Mr Baron Perryn intimated a wish to take the opinion of the twelve judges of England, but the counsel for the prosecution, waiving the point for the present, insisted on the prisoner’s being tried on the second indictment, for feloniously shooting at Barnaby Windsor, which, the learned counsel said, would occupy no great portion of time, as it could be sufficiently supported by the testimony of a single witness. He was accordingly tried, and found guilty on a second capital indictment: The prisoner, who, contrary to general expectation, had in a great measure hitherto refrained from his usual audacity, began, with unparalleled insolence of expression and gesture, to ask his Lordship if he was to be murdered by the evidence of one witness. Several times he repeated the question, till the jury returned him guilty.\nWhen the judge appeared in the black cap, the emblem assumed at the time of passing sentence on convicted felons, Avershaw, with the most unbridled insolence and bravado, clapped his hat upon his head, and pulled up his breeches with a vulgar swagger; and during the whole of the ceremony, which deeply affected all present except the senseless object himself, he stared full in the face of the judge with a malicious sneer and affected contempt, and continued this conduct till he was taken, bound hand and foot, from the dock, venting curses and insults on the judge and jury for having consigned him to “murder.”\nThis brutal conduct continued to the last. In the interval between receiving sentence of death and the execution, having got some black cherries, he amused himself with painting on the white walls of the cell in which he was confined, sketches of various robberies which he had committed; one representing him running up to the horses’ heads of a post-chaise, presenting a pistol at the driver, with the words, D–n your eyes, stop,” issuing out of his mouth; another where he was firing into the chaise; a third, where the parties had quitted the carriage; several, in which he was portrayed in the act of taking money from the passengers, and other scenes of a similar character.\nHe was executed on Kennington Common, on the 3rd of August, 1795, in the presence of an immense multitude of spectators, among whom he recognised many acquaintances and confederates, to whom he bowed, nodded, and laughed with the most unfeeling indifference. He had a flower in his mouth, and his waistcoat and shin were unbuttoned, leaving his bosom open in the true style of vulgar gaiety; and, talking to the mob, and venting curses on the officers, he died, as he had lived, a ruffian and a brute!\nWith Avershaw suffered John Little, who, having had employment at the laboratory of the palace at Kew, became acquainted with Mr Macevoy and Mrs King, persons of very advanced years, and who had been many years resident at Kew. Supposing they had some property at home, he watched an opportunity and murdered them both. ‘\nFollowing the execution his body was then displayed in a gibbett at Jerry’s Hill (named after him on Putney Common where it is said 100,000 visitors came to see his corpse.',
    authorId: 5,
    latlong: [-0.23069604207054795, 51.43763083296801],
  },
];

export default stories;

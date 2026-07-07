// ————————————————————————————————————————————————————————————————
// HADEA FIELD LOG — COMPLETIONIST LEDGER DATA
// Compiled 3 Jul 2026 from PowerPyx guides (verified fetches):
//   good-deeds, all-relic-locations, all-mysteries-locations-solutions,
//   all-legend-of-the-phol-timeloops, all-baseball-cap-locations,
//   cross-checked vs S4G official trophy descriptions.
// Integration spec lives in CLAUDE.md (Completionist view, roadmap item 1).
// miss:true = permanently losable · campaignId = shared checkbox with the
// Campaign view (same storage id). gd13–16 track individually here; the Campaign's
// single b4 row aggregates them (see AGGREGATES in index.html).
//
// zones:[] = canonical region names (in ZONES, index.html) for the Completionist
// "By zone" lens. The display `zone` string is left UNTOUCHED (kept human-readable);
// zones[] is its normalized form. Multi-zone items list every canonical region they
// touch (derived from the display string's →/+// connectors). Normalization, not
// guessing, resolves sub-locations to their canonical parent: the Vaults (Prairie/
// Mire/Mere/Beck/Knoll) → "Vaults of Forbidden Knowledge"; Pathem Abbey → "Acasa
// Marshes"; forge-interior content the display loosely calls "Lake Cynon" → "Lymbic
// Forge" (rl2/rl12/tl7, where detail names the forge explicitly). cap1 (the "Worn" cap,
// carried from the opening — no region; display zone "None (cap Rémi starts with)") has
// zones:[] and falls to the trailing "No Zone" group (9.7 MILLINER, was "Unverified"). F4 caps
// 7–10 were completed (see below), so no genuine zone-unknowns remain.
// ————————————————————————————————————————————————————————————————

const LEDGER = [
{ id:"deeds", title:"Good Deeds", count:26, trophy:"Man of the People", items:[
 {id:"gd1", name:"The Golden Watch", zone:"Senedra Forest", zones:["Senedra Forest"], miss:false, campaignId:null, detail:"Gold Watch + letter at an interact point in the trenches; trade the watch to Ernest Caddel at his house."},
 {id:"gd2", name:"Forlorn Fate", zone:"Talju → Senedra Forest", zones:["Senedra Forest", "Talju"], miss:true, campaignId:"b9", detail:"Symbol – Flame + Map – Senedra Mountains upstairs in the Vanderlyn Trust building; place the symbol at the trench-area stairway door in Senedra, trade the map to the woman inside. Deadline: end of Act 2."},
 {id:"gd3", name:"Land of Milk and Honey", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:true, campaignId:"a6", detail:"Empty baby bottles in the underground of the white-graffiti house SW of Jova; Caddel fills them; return to the woman. Deadline: end of Act 1."},
 {id:"gd4", name:"Love Thy Neighbour", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:true, campaignId:"a7", detail:"Bloodied Plushie at the hanging-bodies tree east of Jova → drunk man in the graffiti house → Classroom Picture to the woman in the orange-door house by Jaffer. Deadline: end of Act 1. Required for Ever After."},
 {id:"gd5", name:"Asunder", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:true, campaignId:"a8", detail:"Letter – Worried Wife on the porch behind the house past the white ON truck → man by the excavator at the area entrance. Deadline: end of Act 1."},
 {id:"gd6", name:"Performance of a Lifetime", zone:"Acasa Marshes, Vyssa Hills", zones:["Acasa Marshes", "Vyssa Hills"], miss:true, campaignId:"a17", detail:"TWO sheet musics: 'Our Pride' at the piano behind the graffiti house in Jova, and 'Losilus Dreaming' by the suitcase SE of the statue tree in Vyssa Hills. Both go to the violinist near Jova's entrance. Deadline: end of Act 1."},
 {id:"gd7", name:"Waylaid", zone:"Talju, Lethe Ministry → Acasa Marshes", zones:["Acasa Marshes", "Talju", "Lethe Ministry"], miss:true, campaignId:"b17", detail:"Metformin from the Talju pharmacy (key at the playground tree) + Satellite Radio via Ministry keycard; trade both to the two ON Soldiers under the stone pillar SW of Jova. Deadline: end of Act 2."},
 {id:"gd8", name:"Victor's Vigil", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Keys – Car on the balcony in Vitalis' house; open the trunk of the car in the water by the northern ruins; give the Necklace to Victor at the forge."},
 {id:"gd9", name:"Where the Heart Is", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"After Vyssa Hills Act 1 events: interact point at the back of the tunnel where you rescued Victor → Photograph – Girl → Zao Ru at the ON Outpost in Jova."},
 {id:"gd10", name:"Heart of Gold", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:true, campaignId:"b2", detail:"Keys – ON Vehicle drop from the Vyssa Timeloop; give to Atticus only AFTER the On Death's Door and Man's Best Friend good deeds."},
 {id:"gd11", name:"On Death's Door", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:true, campaignId:"a12", detail:"Pill Bottle – Atenolol by the rock pile near Vitalis' grave → woman at the north camp. Deadline: end of Act 1, and strictly before the Heart of Gold good deed."},
 {id:"gd12", name:"Man's Best Friend", zone:"Acasa Marshes → Vyssa Hills", zones:["Acasa Marshes", "Vyssa Hills"], miss:true, campaignId:"b1", detail:"Act 2 start: free the dog west of Jova → Dog Collar to the man at the Vyssa refugee camp. Complete before the abbey events so the dog reaches the lake (Ever After)."},
 {id:"gd13", name:"A Light in the Dark (1/4)", zone:"Talju", zones:["Talju"], miss:true, campaignId:null, detail:"Flares from the Town Hall door. Recipient 1: the woman in the house east of Town Hall (ramp + ladder). Counts complete when survivors leave."},
 {id:"gd14", name:"A Light in the Dark (2/4)", zone:"Talju", zones:["Talju"], miss:true, campaignId:null, detail:"Recipient 2: Boro Juven in the garage near the APC."},
 {id:"gd15", name:"A Light in the Dark (3/4)", zone:"Talju", zones:["Talju"], miss:true, campaignId:null, detail:"Recipient 3: the woman upstairs in the Vanderlyn Trust building (kill the three Hollows first)."},
 {id:"gd16", name:"A Light in the Dark (4/4)", zone:"Talju", zones:["Talju"], miss:true, campaignId:null, detail:"Recipient 4: the man in the barn window at the west map edge. All four before the Town Hall parking-lot Hollow fight."},
 {id:"gd17", name:"Insult to Injury", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"Key – Antenna behind the crying-barn SW of the APC; use it on the box at the base of the radio tower (drop down from the statue cave path) and switch it off."},
 {id:"gd18", name:"Power to the People", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"3 fuses from the open-door house south of the church village; insert into the three fuse boxes (behind the pickup house NW; north of Talis' building; basement house west on the north road)."},
 {id:"gd19", name:"The Depths of Hell", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"After placing a fuse: use the radio in the fused house (community note Feb 2026 — talk to the girls via the radio on the kitchen table, third house with the basement ladder) so the man appears at the pier. Gas Canister from the dock below the statue → man at the blue-house dock near the APC."},
 {id:"gd20", name:"Samo's Keys", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"Keys – Samo's Spare behind the General Store counter → man on the roof of Grisibel's Auto Repair (ladder around back)."},
 {id:"gd21", name:"A Way Out", zone:"Lethe: Ministry → Library", zones:["Lethe Library", "Lethe Ministry"], miss:false, campaignId:null, detail:"Note in the Restoration Office starts it; Ministry Office 109 safe (code 2703) → Official Hadean Stamp; Office 112 → Blank ID Cards; both to the old lady in the Library basement."},
 {id:"gd22", name:"Incognito", zone:"Lethe Ministry", zones:["Lethe Ministry"], miss:true, campaignId:"b16", detail:"Keycard from the parking ramp → Woman's Clothing behind the keycard door near the king's portrait → ON Soldier in the Lounge. Must finish before leaving the Ministry."},
 {id:"gd23", name:"Mementos", zone:"Auriga Museum → Marastan, Senedra Forest", zones:["Senedra Forest", "Marastan", "Auriga Museum"], miss:false, campaignId:null, detail:"Cigarette Case + Ring from Cells 002/004 past the Training Room vault door; Case → Elzina Tibor at the Marastan boat-dock house (requires the Depths of Hell good deed completed); Ring → Dag Samson in Caddel's basement."},
 {id:"gd24", name:"Separated", zone:"Jeljin", zones:["Jeljin"], miss:false, campaignId:null, detail:"Keys – Crane via the church roof route; through the dig-site underground; kill the green-Haze group and yellow-Haze enemy, work the crane platform puzzle, then kill the ranged enemy up top."},
 {id:"gd25", name:"Never Worn", zone:"Jeljin → Acasa Marshes", zones:["Acasa Marshes", "Jeljin"], miss:false, campaignId:null, detail:"Key – Archeology Camp by the dig-site Timeloop backpack → locker in the small camp tent → Shoes – Red placed at the elephant plush upstairs in the Jova graffiti house."},
 {id:"gd26", name:"Family Feud", zone:"Marastan → Jeljin", zones:["Marastan", "Jeljin"], miss:false, campaignId:null, detail:"Urn + letter from the room above the garage west of the church; lantern man south of the Jeljin APC blesses it and gives Key – Columbarium; place the Urn in the columbarium building by the dig site."},
]},

{ id:"relics", title:"Relics", count:29, trophy:"Antiquarian", items:[
 {id:"rl1", name:"Aarlon's Last Stand", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"From the Hermit mystery."},
 {id:"rl2", name:"Aster's Band of Domination", zone:"Lake Cynon", zones:["Lymbic Forge"], miss:false, campaignId:null, detail:"Story, Act 1 — stone coffin in the Lymbic Forge."},
 {id:"rl3", name:"Blessed Hand of Sethyris", zone:"Auriga Museum", zones:["Auriga Museum"], miss:false, campaignId:null, detail:"Close Timeloop – Auriga Museum B4, then collect from Gildas Brom."},
 {id:"rl4", name:"Call of the Griffon", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:true, campaignId:null, detail:"Reward for the Land of Milk and Honey good deed (via Gildas). Missable with the deed."},
 {id:"rl5", name:"Chalice of Everflowing Turmoil", zone:"Vault of the Prairie", zones:["Vaults of Forbidden Knowledge"], miss:false, campaignId:null, detail:"Inside the Vault of the Prairie."},
 {id:"rl6", name:"Cyrene's Requiem", zone:"Auriga Museum", zones:["Auriga Museum"], miss:false, campaignId:null, detail:"Close Timeloop – Auriga Museum B1 → Gildas."},
 {id:"rl7", name:"Heart of the Griffon", zone:"Vault of the Mire", zones:["Vaults of Forbidden Knowledge"], miss:false, campaignId:null, detail:"Inside the Vault of the Mire (dials: Rage, Ecstasy, Terror, Grief)."},
 {id:"rl8", name:"Knell of Ebbing Ecstasy", zone:"Talju", zones:["Talju"], miss:true, campaignId:null, detail:"Reward for the A Light in the Dark good deeds (via Gildas). Missable with the deeds."},
 {id:"rl9", name:"Knell of Fading Terror", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"Reward for the Depths of Hell good deed (via Gildas). See that good deed's ordering caution."},
 {id:"rl10", name:"Knell of Receding Rage", zone:"Jeljin", zones:["Jeljin"], miss:false, campaignId:null, detail:"Close Timeloop – Jeljin Cemetery → Gildas."},
 {id:"rl11", name:"Knell of Waning Grief", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"Close Timeloop – Francis' Church → Gildas."},
 {id:"rl12", name:"Kolig's Providence", zone:"Lake Cynon", zones:["Lymbic Forge"], miss:false, campaignId:null, detail:"Close Timeloop – Lymbic Forge → Gildas."},
 {id:"rl13", name:"Mark of the Betrayed", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"Story, Act 1 — stone coffin in the Watcher's Nest."},
 {id:"rl14", name:"Memoria of the Phol", zone:"Vault of the Mere", zones:["Vaults of Forbidden Knowledge"], miss:false, campaignId:null, detail:"Inside the Vault of the Mere."},
 {id:"rl15", name:"Orison of Valour", zone:"Vault of the Beck", zones:["Vaults of Forbidden Knowledge"], miss:false, campaignId:null, detail:"Inside the Vault of the Beck."},
 {id:"rl16", name:"The Benediction of Palom", zone:"Auriga Museum → Marastan, Senedra Forest", zones:["Senedra Forest", "Marastan", "Auriga Museum"], miss:false, campaignId:null, detail:"Reward for the Mementos good deed (via Gildas)."},
 {id:"rl17", name:"The Blood Queen's Phalange", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"Close Timeloop – Vyssa Hills → Gildas."},
 {id:"rl18", name:"The Bloodseeker", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"From the Protector mystery (abbey Timeloop → Jova cemetery pillar)."},
 {id:"rl19", name:"The Crucible of Fire", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"From the Enlightenment mystery — pick it up from the opened room."},
 {id:"rl20", name:"The Dream Aculeus", zone:"Arcas Spire", zones:["Arcas Spire"], miss:false, campaignId:null, detail:"Close Timeloop – Arcas Spire (story) → Gildas."},
 {id:"rl21", name:"The Entropic Enigma", zone:"Talju", zones:["Talju"], miss:false, campaignId:null, detail:"Close Timeloop – Talju → Gildas."},
 {id:"rl22", name:"The Eternal Sands", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"Close Timeloop – Marastan → Gildas."},
 {id:"rl23", name:"The Heart of Aria", zone:"Pathem Abbey", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Close Timeloop – Pathem Abbey → Gildas."},
 {id:"rl24", name:"The Omen of Oblivion", zone:"Senedra Forest", zones:["Senedra Forest"], miss:false, campaignId:null, detail:"Close Timeloop – Senedra Hilltop → Gildas (requires the Lymbic Door (Hilltop) mystery to reach)."},
 {id:"rl25", name:"The Panoptic Eudemon", zone:"Lake Cynon → Acasa Marshes", zones:["Lake Cynon", "Acasa Marshes"], miss:false, campaignId:null, detail:"From the Safekeeping mystery."},
 {id:"rl26", name:"The Relentless Assault", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:true, campaignId:null, detail:"Reward for the Waylaid good deed (via Gildas). Missable with the deed."},
 {id:"rl27", name:"The Unbound Delusion", zone:"Vault of the Knoll", zones:["Vaults of Forbidden Knowledge"], miss:false, campaignId:null, detail:"Inside the Vault of the Knoll."},
 {id:"rl28", name:"Visage of the Defier", zone:"Jeljin", zones:["Jeljin"], miss:false, campaignId:null, detail:"From the Family First mystery — pick up from the opened room."},
 {id:"rl29", name:"Wisdom of the Griffon", zone:"Plains of Mist", zones:["Plains of Mist"], miss:false, campaignId:null, detail:"Close Timeloop – Temple of the Fallen → Gildas."},
]},

{ id:"myst", title:"Mysteries", count:43, trophy:"Super-Sleuth", items:[
 {id:"my1", name:"Caddel Family Treasure", zone:"Senedra Forest", zones:["Senedra Forest"], miss:false, campaignId:null, detail:"Rusted Key at the red cairn above the OMSIF camp (follow the work light); chest at the blue cairn."},
 {id:"my2", name:"Secrets of the Ram", zone:"Senedra Forest", zones:["Senedra Forest"], miss:false, campaignId:null, detail:"Two Ram Head Medallions (ruins right side; underground second room); place them facing each other at the circle door."},
 {id:"my3", name:"Lymbic Door (Hilltop)", zone:"Senedra Forest", zones:["Senedra Forest"], miss:false, campaignId:null, detail:"Grief rods from the Vigil Hideout coffin room and the Francis' Church mine (needs Key – Mine); door at the hilltop ruins. Gates the Hilltop Timeloop."},
 {id:"my4", name:"Lymbic Door (Underground)", zone:"Senedra Forest", zones:["Senedra Forest"], miss:false, campaignId:null, detail:"Rage rods from the Talju circled house (Key – Talju House at the playground) and the Marastan cave; door in the room from the Forlorn Fate good deed."},
 {id:"my5", name:"Emergency Stash", zone:"Arcas Spire", zones:["Arcas Spire"], miss:false, campaignId:null, detail:"Rusted Key via the cave off the third save point; chest past the pillar near the elevator scaffolding."},
 {id:"my6", name:"Righteous Protection", zone:"Arcas Spire", zones:["Arcas Spire"], miss:false, campaignId:null, detail:"Key – Brass in the hole in the corpse stairway; chest in the elevator room at the top."},
 {id:"my7", name:"The Hermit", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Stone pillars south of the Hermit's hut. Facing east, clockwise: Two Spikes, Four Spikes, Circle, One Spike."},
 {id:"my8", name:"The Captain's Office", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Two mead bottles (Jova fridge; beside Jaffer at Lake Cynon post-abbey) → drunk soldier → Key – Jova Office → rooftop door near the town entrance."},
 {id:"my9", name:"Observation Outpost 08", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Gate keypad NE of Jova: 151991; read the computer in the right tent."},
 {id:"my10", name:"Martial Lineage", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Four white stone spikes by the hill doorway NE of the hanging tree; hit near-left, then counterclockwise, ending beside the door."},
 {id:"my11", name:"The Protector", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Golden Clover after the Pathem Abbey Timeloop → pillar in the NW corner of the Jova cemetery. Awards Relic: The Bloodseeker."},
 {id:"my12", name:"Enlightenment", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Five torch sets across the region (marsh tower, Martial Lineage room, abbey switch door, Outpost 08 cave, Jova catacombs); light the correct sides to open the well-top door. Awards Relic: The Crucible of Fire."},
 {id:"my13", name:"Lymbic Chest (Vitalis' Basement)", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Grief rods from Vitalis' basement and behind Victor's red chest; chest back in the basement."},
 {id:"my14", name:"Lymbic Door (Western Monument)", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Neutral rods from the Jova well hallway and the ruins north of the hanging tree; door under the marsh stone tower."},
 {id:"my15", name:"Lymbic Chest (Eastern Ruins)", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Terror rod beside the Pathem Abbey Timeloop; green chest in the ruins north of the tall pillars."},
 {id:"my16", name:"Lymbic Chest (Fort)", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"Ecstasy rod up the steps after the Francis' Church events; yellow chest by the Moon-door ruins."},
 {id:"my17", name:"Lucky Break", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"Rusted Key in the mine's first side opening; chest in the far ruins past the shortcut building."},
 {id:"my18", name:"Eternity", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"Gildas' locked computer in the Vigil Hideout: code 241244."},
 {id:"my19", name:"Pilgrimage", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"Key – Barrel from the Plains of Mist platform building; chest in the Hollow-statue ruins where the Vyssa Timeloop was."},
 {id:"my20", name:"Lymbic Chest (Reservoir)", zone:"Lake Cynon", zones:["Lake Cynon"], miss:false, campaignId:null, detail:"Neutral rods (Acasa blocked road body; Outpost 08 left tent); white chest opposite the forge entrance in the drained reservoir."},
 {id:"my21", name:"Lost Keys", zone:"Lake Cynon → Marastan", zones:["Lake Cynon", "Marastan"], miss:false, campaignId:null, detail:"Keys – Algae by the forge entrance in the drained area → chest in the back of Samo's General Store. Awards a Baseball Cap."},
 {id:"my22", name:"Safekeeping", zone:"Lake Cynon → Acasa Marshes", zones:["Lake Cynon", "Acasa Marshes"], miss:false, campaignId:null, detail:"Key – Rustic behind Rebecca's lake building (post-abbey) → chest opposite the Pathem Abbey entrance. Awards Relic: The Panoptic Eudemon."},
 {id:"my23", name:"Lymbic Door", zone:"Lymbic Forge", zones:["Lymbic Forge"], miss:false, campaignId:null, detail:"Three Terror rods inside the forge (below the pillar room; by the drain-mechanism walkway; west lockdown room); door at the lowest drained level."},
 {id:"my24", name:"Lymbic Chest (Hall)", zone:"Lymbic Forge", zones:["Lymbic Forge"], miss:false, campaignId:null, detail:"Rage rod in the podium library; chest through the Owl-key door off the torch room."},
 {id:"my25", name:"Lymbic Chest (Dormitory)", zone:"Lymbic Forge", zones:["Lymbic Forge"], miss:false, campaignId:null, detail:"Neutral rod in the second library room; chest in the dormitory up the northern stairs past the sigil door."},
 {id:"my26", name:"The Hideout", zone:"Talju", zones:["Talju"], miss:false, campaignId:null, detail:"Safe up the ladder south of the town hall: code 34911."},
 {id:"my27", name:"History Lesson", zone:"Talju → Lethe Library", zones:["Talju", "Lethe Library"], miss:false, campaignId:null, detail:"Begins while wandering around Talju. Safe on the trash can by the Library entrance gate: code 81643."},
 {id:"my28", name:"Supply Chain", zone:"Talju", zones:["Talju"], miss:false, campaignId:null, detail:"Pharmacy computer (Keys – Pharmacy at the playground tree): code 91012."},
 {id:"my29", name:"Ill-Gotten Gains", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"Key – Marastan Church left of the cave save point; door in the crypt (center room → north hall → first right → left)."},
 {id:"my30", name:"Lymbic Chest (Ruins)", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"Terror rod in the crypt's south hall east alcove; chest atop the island ruins past the wooden bridge tunnel."},
 {id:"my31", name:"Locked Down", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"Security booth computer east of the APC: code 4132, read 'First Day'."},
 {id:"my32", name:"The Conspiracy", zone:"Lethe Library", zones:["Lethe Library"], miss:false, campaignId:null, detail:"Computer in the helicopter-ceiling room: code 731596."},
 {id:"my33", name:"Suspicious Activity", zone:"Lethe Library", zones:["Lethe Library"], miss:false, campaignId:null, detail:"Staff room door code 5055 → Keys – Car → blue car trunk outside (east corner). Awards a Baseball Cap."},
 {id:"my34", name:"Blackmailed", zone:"Lethe Ministry → Lake Cynon", zones:["Lethe Ministry", "Lake Cynon"], miss:false, campaignId:null, detail:"Keys – Ministry Car (Secretary desk) → garage car for Ecstasy rod X; rod Y on the lower-floor office desk; yellow door on the forge path shortcut."},
 {id:"my35", name:"Overgrown", zone:"Plains of Mist", zones:["Plains of Mist"], miss:false, campaignId:null, detail:"Key – Mossy on the counterclockwise dead-end skeleton; chest past the Hollow-statue path building."},
 {id:"my36", name:"Lymbic Chest (Temple of the Fallen)", zone:"Plains of Mist", zones:["Plains of Mist"], miss:false, campaignId:null, detail:"Two Ecstasy rods (east drop-down path end; west path past the blue-Haze Guardian); yellow chest past the second pressure-plate room."},
 {id:"my37", name:"Ascetic Vows", zone:"Plains of Mist", zones:["Plains of Mist"], miss:false, campaignId:null, detail:"Rusted Key across the wooden bridge in the enemy-heavy area (lever/ladder route); door in the SW room."},
 {id:"my38", name:"Family First", zone:"Jeljin", zones:["Jeljin"], miss:false, campaignId:null, detail:"Ring door at the dig site, top to bottom: Crown, Flower, Lion, Sheep. Awards Relic: Visage of the Defier."},
 {id:"my39", name:"Lymbic Chest (Archeology Camp)", zone:"Jeljin", zones:["Jeljin"], miss:false, campaignId:null, detail:"Rage rods (Ministry white truck east of APC; dig-site save-point flower room); red chest on the dig-site truck."},
 {id:"my40", name:"Great Responsibility", zone:"Auriga Museum", zones:["Auriga Museum"], miss:false, campaignId:null, detail:"Symbol – Iron Crown in the B4 post-Timeloop storage room; doorway back at the Hollow-statue entrance room."},
 {id:"my41", name:"Lymbic Chest (Waterfall)", zone:"Auriga Museum → Lymbic Forge", zones:["Lymbic Forge", "Auriga Museum"], miss:false, campaignId:null, detail:"Grief rod in the same B4 storage room; blue chest behind the waterfall between the Keystone-room waterwheels."},
 {id:"my42", name:"Lax Security", zone:"Auriga Museum", zones:["Auriga Museum"], miss:false, campaignId:null, detail:"B1 safe beside the Timeloop room's Clearance Alpha door: code 77777."},
 {id:"my43", name:"Whistleblowers", zone:"Auriga Museum", zones:["Auriga Museum"], miss:false, campaignId:null, detail:"B2 maintenance: switch power grid to Red, computer in the boxes past the screaming-man door: code 051108."},
]},

{ id:"caps", title:"Baseball Caps", count:10, trophy:"Passion for Fashion", items:[
 {id:"cap1", name:"Worn", zone:"None (cap Rémi starts with)", zones:[], miss:false, campaignId:null, detail:"In your inventory from the beginning. Still needs to be worn once (no-hat toggle off)."},
 {id:"cap2", name:"Terror", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"From the Lost Keys mystery — chest in the back of Samo's General Store."},
 {id:"cap3", name:"Ecstasy", zone:"Lethe Library", zones:["Lethe Library"], miss:false, campaignId:null, detail:"From the Suspicious Activity mystery — blue car trunk outside the Library."},
 {id:"cap4", name:"Sabinian", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"From the Captain's Office mystery — Captain Vaas' office in Jova (the caved-in-roof house; ramp up, ladder to the attic, drop to the balcony). Trade both mead bottles to the drunk soldier for Key – Jova Office; cap is on the hanger inside, with the Prison Manifest research item and the Vaas' Plan recording."},
 {id:"cap5", name:"Gilded", zone:"Eye of God", zones:["Eye of God"], miss:false, campaignId:null, detail:"Desk south of the final story Timeloop's location — grab during the ending area or post-story."},
 {id:"cap6", name:"Grief", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"During the Keystone of Ecstasy return: cave NW of the Moon door, drop at the broken platform, tunnel right, ladder up, left then right to the wooden-platform ledge."},
 {id:"cap7", name:"Palomist", zone:"Talju", zones:["Talju"], miss:false, campaignId:null, detail:"In a chest inside the barn in the NW corner of town (the same barn as the Talju Timeloop); climb the ladder around the back to reach it."},
 {id:"cap8", name:"Quebec", zone:"Jeljin", zones:["Jeljin"], miss:false, campaignId:null, detail:"On the crane scaffolding during the Separated good deed — sitting directly below the ranged enemy you kill up top. Grab it while working the crane platform puzzle."},
 {id:"cap9", name:"Rage", zone:"Lethe Ministry", zones:["Lethe Ministry"], miss:false, campaignId:null, detail:"Just inside the Ministry of Cultural Primacy entrance: drop down and pick it up from underneath the stairs to the left."},
 {id:"cap10", name:"Veteran", zone:"Lake Cynon", zones:["Lake Cynon"], miss:false, campaignId:null, detail:"On a ledge reached by climbing the cliff to the left of the flower-filled area below the APC."},
]},

{ id:"loops", title:"Timeloops", count:14, trophy:"Legend of the Phol", items:[
 {id:"tl1", name:"Hilltop", zone:"Senedra Forest", zones:["Senedra Forest"], miss:false, campaignId:null, detail:"Prism: Sigma. Reach via the Lymbic Door (Hilltop) mystery. Stragglers: start-of-game underground, OMSIF camp, Arcas Spire path, forest between APC and Caddel's house."},
 {id:"tl2", name:"Spire Rooftop", zone:"Arcas Spire", zones:["Arcas Spire"], miss:false, campaignId:null, detail:"Story-required (Keystone of Terror). Stragglers: cell Hollows in the plate/lever room — plates marked 4 open each section's cells."},
 {id:"tl3", name:"Beyond the Bridge", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Prism: Sigma. East of Jova past the bridge. Stragglers: enemies hidden in the shallow marsh pools (walk through to trigger), tunnels under Jova, Victor's rescue tunnel."},
 {id:"tl4", name:"Pathem Abbey", zone:"Acasa Marshes", zones:["Acasa Marshes"], miss:false, campaignId:null, detail:"Prism: Theta. Underground past the Abbot Jaffer conversation."},
 {id:"tl5", name:"Northwest of Watcher's Nest", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"Prism: Sigma. Center of the area by the mine entrance. Stragglers: mine tunnels + hilltop entrance, lower water pools — and the hidden mine room (ladder down, first left) from the trophy-guide comments."},
 {id:"tl6", name:"Francis' Church", zone:"Vyssa Hills", zones:["Vyssa Hills"], miss:false, campaignId:null, detail:"Prism: Theta. Hollow-statue area before the third stone tunnel. Stragglers: mine tunnels between the first and second stone tunnels."},
 {id:"tl7", name:"Below the Forge", zone:"Lake Cynon", zones:["Lymbic Forge"], miss:false, campaignId:null, detail:"Prism: Theta. Bottom of the Act 1 elevator. Stragglers: story side paths, check dead ends."},
 {id:"tl8", name:"Sphere Antechamber", zone:"Lake Cynon", zones:["Lake Cynon"], miss:false, campaignId:null, detail:"Story-required in Act 3; no Gildas reward."},
 {id:"tl9", name:"City Outskirts", zone:"Talju", zones:["Talju"], miss:false, campaignId:null, detail:"Prism: Theta. NW corner past the barn. Stragglers: north/south edge paths, garage by the APC."},
 {id:"tl10", name:"Outside the Ruins", zone:"Marastan", zones:["Marastan"], miss:false, campaignId:null, detail:"Prism: Theta. West ruins, hug the left wall into the forest. Stragglers: forest paths east of APC, church crypt, Blood Queen statue caves."},
 {id:"tl11", name:"Temple of the Fallen", zone:"Plains of Mist", zones:["Plains of Mist"], miss:false, campaignId:null, detail:"Prism: Rho. Lower level at the temple entrance. Known map bug: Plains of Mist hover status can show the previously hovered zone's state — re-enter to verify."},
 {id:"tl12", name:"Jeljin Cemetery", zone:"Jeljin", zones:["Jeljin"], miss:false, campaignId:null, detail:"Prism: Rho. Underground at the dig site via the tunnel under the stairs. Stragglers: 'dead' Hollows near the cemetery APC that stand up when approached."},
 {id:"tl13", name:"Auriga Museum B1", zone:"Auriga Museum", zones:["Auriga Museum"], miss:false, campaignId:null, detail:"Through the Training Room. Stragglers: B2 green/red doors, B3 blue/orange doors."},
 {id:"tl14", name:"Auriga Museum B4", zone:"Auriga Museum", zones:["Auriga Museum"], miss:false, campaignId:null, detail:"Prism: Rho. Keystone of Rage room — computer code 7584 spawns the Guardians."},
]},
];

// ————— Campaign content fixes discovered during compilation —————
// F1 (VERIFIED, official descriptions + PowerPyx walkthrough header):
//   Campaign item d2 conflates three trophies. Correct requirements:
//   Good Vibrations = fully upgrade 4 weapons (one of each type);
//   Accessorizing = fully upgrade 2 Defensive Items to max;
//   To the Teeth = EQUIP two Grade 5 weapons + two Grade 4 defensive gear AT ONCE.
// F2 (VERIFIED, good-deeds guide): GD6 requires BOTH sheet musics — 'Our Pride'
//   (Jova piano) and 'Losilus Dreaming' (Vyssa Hills). Campaign a9/a17 mention only one.
// F3 (community, Feb 2026, unverified in-game): GD19 trigger — after placing a
//   fuse, use the radio in the fused house (girls, kitchen table) before the dock
//   man appears; consider completing before placing all three fuses.
// F4 (DONE, 4 Jul 2026, one fetch of powerpyx.com/hell-is-us-all-baseball-cap-locations):
//   caps 7–10 filled — Palomist (Talju barn), Quebec (Jeljin, GD#24 scaffolding),
//   Rage (Lethe Ministry, under entrance stairs), Veteran (Lake Cynon, cliff ledge below APC).
//   The other six were already present under generic labels (caps 1–6).

import FoxtailPine from './FoxtailPine.js'
import WhitebarkPine from './WhitebarkPine.js'
import Forest from './Forest.js'
import Lumberjack from './Lumberjack.js'

const treeList = [new WhitebarkPine(), new FoxtailPine(5), new WhitebarkPine(3)]
const forest = new Forest(treeList)
forest.rain()
const jambor = new Lumberjack()
//forest.cutTrees(jambor)

console.log(forest.getStatus())

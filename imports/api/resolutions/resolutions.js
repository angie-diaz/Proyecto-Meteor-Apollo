import {Mongo} from "meteor/mongo";

//Conexion con la base de datos
const Resolutions=new Mongo.Collection("resolutions");

export default Resolutions;

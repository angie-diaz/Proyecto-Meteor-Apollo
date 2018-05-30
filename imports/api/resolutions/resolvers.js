import Resolutions from './resolutions';
// Resolutions.insert({
//   name:"luego"
// });

// //seleccion de datos de la base de datos
// const res=Resolutions.find({}).fetch();
// console.log(res);//[]vacio

export default {
  Query:{
    resolutions(obj,args, {userId}){
      console.log(userId);
      const res=Resolutions.find({userId}).fetch();
      console.log(res);
      return res;
    }
  },

  Mutation:{
    createResolution(obj,{name},{userId}){
      console.log(name);

      const resolutionsId=Resolutions.insert({
        name,
        userId
      });
      console.log("something");
      return Resolutions.findOne(resolutionsId);
    }
  }
};

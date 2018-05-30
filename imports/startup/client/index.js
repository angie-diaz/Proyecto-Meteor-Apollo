import React from "react";
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
//conexion con el cliente
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {ApolloLink, from} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import App from "../../ui/App";
//conexion con apollo
const httplink=new HttpLink({//crea liga con meteor y apollo
  uri:Meteor.absoluteUrl("graphql")
});

const authLink = new ApolloLink((operation, forward) => {
  const token = Accounts._storedLoginToken();
  operation.setContext(()=>({
    headers:{
      "meteor-login-token": token,
    }
  }));
  return forward(operation);
});

////varible de memoria///CREACION DEL OBJETO TEMPORAL
const cache=new InMemoryCache();
//recibe un objeto, Se descarga en memoria
const client=new ApolloClient({
  link:from([authLink, httplink]),
  cache
});

const ApolloApp=()=>(//funcion anonima
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

Meteor.startup(()=>{
  render(<ApolloApp/>,document.getElementById('app'))//renderizar app
});
//que es apollo
//que es meteor

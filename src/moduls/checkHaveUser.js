import React from 'react'

function checkHaveUser(usersData, userName) {
    let userData={
        name: userName,
        levels:[
          {
            time: 0,
            count: 0,
            score:0,
          },
          {
            time: 0,
            count: 0,
            score:0,
          },
          {
            time: 0,
            count: 0,
            score:0,
          }
        ]
      }
    const newUsersData = usersData.filter(element => {
        if(element.name===userName){
            userData=element;
            return false;
        }else{
            return true
        }
    });
    return newUsersData.length===0 ? [userData] : [userData,...newUsersData];
} 

export default checkHaveUser;
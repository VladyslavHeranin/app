import React from "react"

const Profile = ({ profile  }) => {

    const types = profile.types.map((z , id) => { return <span className="types__items" key={id} >{z.type.name}</span> })

 let result  = 0

const total = () => {
    for (let i = 0; i <  profile.stats.length; i++) {
           result = result +  profile.stats[i].base_stat
     }

     return Math.floor((result + profile.weight) / (profile.stats.length + 1)) 
}
   
    const point = profile.stats.map((z,id) => {
  
      return <div className="point__item"  key={id}>
            <p className="type__name">{z.stat.name}</p>    
            <p className='types__profile' >{z.base_stat}</p> 
       </div>
       })

  return (
 
        <div className="profile_pokemon">
        <div className="img" >
             <img  className="img__profile" src={profile.sprites.front_default} alt={profile.id}/>
             </div>
             <div className="profile__name">
             <p>{profile.name} # {profile.id}</p>    
             </div>
             <div  className='point'>
               <div  className="point__item">
                    <p className="type__name">types</p>
                    <p className="types__profile">{types}</p>
               </div>
                     {point}
                     <div className="point__item">
                     <p className="type__name">weight</p>
                    <p className="types__profile">{profile.weight}</p>
                     </div>
                     <div className="point__item">
                     <p className="type__name">total</p>
                    <p className="types__profile">{total()}</p>
                     </div>
             </div>
        </div>

  );
}

export default Profile;   

import { profileText } from "../aset/text";
import Card from "../component/card";
import CodeImage from '../img/CodeImg.svg'

function profile() {
    return (
      <div className="h-screen pt-16">
        <div className="w-4/5 mx-auto">
          <div className="bg-lightgreen w-56 h-3"/>
          <h1 className="my-4 text-3xl font-medium text-blue">My Profile</h1>
          <p className="text-xl font-normal">{profileText.myProfile}</p>
          <div className="my-4 flex justify-center gap-24">
            <Card name="Frontend Developer" bg="bg-blue/25" border="border-blue" img={CodeImage}/>
            <Card name="Design" bg="bg-lightgreen/25" border="border-lightgreen" img={CodeImage} />
           
          </div>
        </div>
      </div>
      // <div className="h-screen pt-16">
      //   <div className="h-3/4screen bg-blue pt-16">
      //     <div className="w-4/5 mx-auto">
      //       <h1 className="text-white text-medium text-2xl pt-10">MY PROFILE</h1>
      //       <p className="text-white my-20 text-medium text-xl">My name is Muhammad Bintang Prabowo im 20 years old, i am a undergraduated student at informatics engineering Brawijaya University im a self-driven individual with great ambition and a will to do my best at everything I undertake. Possesses excellent interpersonal skills, good communication and has the ability to relate well to people from all backgrounds, being able to work under pressure whilst still retaining a good sense of humour even when facing adversity. </p>
      //     </div>
      //   </div>
      //   <div className="h-1/4screen bg-white">
          
      //   </div>
      // </div>
      
    );
  }
  
  export default profile;
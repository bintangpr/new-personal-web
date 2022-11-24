import { profileText, techListing, androidListing } from "../aset/text";
import Card from "../component/card";
import CodeImage from '../img/CodeImg.svg'
import { Element } from 'react-scroll'

function profile() {
    return (
      <div className=" pt-16 pb-10">
        <Element name="section1"/>
        <div className="w-4/5 mx-auto">
          <div className="bg-lightgreen w-32 sm:w-56 h-3"/>
          <h1 className="my-4 text-2xl md:text-3xl font-medium text-blue">My Profile</h1>
          <p className="text-lg sm:text-xl font-normal">{profileText.myProfile}</p>
          <div className="my-4 block sm:flex justify-center gap-24">
            <Card name="Frontend Developer" bg="bg-blue/25" border="border-blue" img={CodeImage} techlist={techListing}/>
            <Card name="Android Developer" bg="bg-lightgreen/25" border="border-lightgreen" img={CodeImage} techlist={androidListing}/>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default profile;
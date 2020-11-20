import './App.css';
import Achievenments from './Components/Achievenments/Achievenments';
import DedicatedTeam from './Components/DedicatedTeam/DedicatedTeam';
import DesignSearch from './Components/DesignSearch/DesignSearch';
import Florence from './Components/Florence/Florence';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import StayProject from './Components/StayProject/StayProject';
import Whatwe from './Components/Whatwe/Whatwe';

function App() {
  return (
    <div >
      <div className="bg2">
        <Navbar></Navbar>
        <Florence></Florence>
      </div>

      <Whatwe></Whatwe>
      <StayProject></StayProject>
     
      <div className="bg3">
      <Achievenments></Achievenments>
        <DedicatedTeam></DedicatedTeam>
        <DesignSearch></DesignSearch>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

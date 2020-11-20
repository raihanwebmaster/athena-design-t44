import './App.css';
import Achievenments from './Components/Achievenments/Achievenments';
import DedicatedTeam from './Components/DedicatedTeam/DedicatedTeam';
import DesignSearch from './Components/DesignSearch/DesignSearch';
import Florence from './Components/Florence/Florence';
import Navbar from './Components/Navbar/Navbar';
import StayProject from './Components/StayProject/StayProject';
import Whatwe from './Components/Whatwe/Whatwe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <div className="bg2">
        <Navbar></Navbar>
        <Florence></Florence>
      </div>

      <Whatwe></Whatwe>
      <StayProject></StayProject>
      <Achievenments></Achievenments>
      <DedicatedTeam></DedicatedTeam>
      <DesignSearch></DesignSearch>
      <Footer></Footer>
    </div>
  );
}

export default App;

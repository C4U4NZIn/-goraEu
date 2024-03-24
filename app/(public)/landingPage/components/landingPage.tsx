import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import { ViewLandingPage } from '../styled/styles';

export default function LandingPage(){
    return(
    <>
    <ViewLandingPage>
        <Header/>
        <MainContent/>   
        <Footer/>
     </ViewLandingPage>
 </>
    
    )
}
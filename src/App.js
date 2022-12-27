import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   `;

   const Header = styled.div`
   display: flex;
   flex-direction: row;
   background-color: black;
   color: white;
   padding: 10px;
   font-size: 25px;
   font-weight: bold;
   box-shadow: 0 3px 6px 0 #555;
   `;

   const AppName = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 100%;
   justify-content: space-between;
   `;

   const SearchBox = styled.div`
   display: flex;
   flex-direction: row;
   padding: 10px 10px;
   background-color: white;
   border-radius: 6px;
   margin-left: 20px;
   width: 50%;
   background-color: white;
  `;


   


function App() {
  return (
    <Container>
      <Header>
        <AppName>
          <div>
           <i class="las la-film"></i>
           Movie Point
           </div>
           <SearchBox><i class="las la-search"></i></SearchBox>
        </AppName>
      </Header>
      Ashok 
     </Container>
  );
}

export default App;

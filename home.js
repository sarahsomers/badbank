function Home(){
  return (
    <Card
      txtcolor="black"
      header={(<img src="bankheader.png" className="img-fluid" alt="Responsive image"/>)}
      title="Nevada's baddest bank!"
      text="You can move around using the navigation bar."
      body={(<img src="banknev.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}

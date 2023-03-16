const ProfileDefault = ( { launches } ) => {
  console.log ({ launches });
  
  return <div> Profile Page {launches[0]}</div>;
};

export async function getStaticProps () {
  return {
    props: {
      launches: [123]
    }
  }
}

export default ProfileDefault;

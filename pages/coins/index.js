import axios from 'axios';
const Coins = ( { coinData } ) => {
  const renderCoinList = (coin) => {
    return(
      <div>
        <h1> {coin.name}</h1>
        <img src={coin.icon} />
        <p> {coin.price}</p>
      </div>
    )
  }
  
  return(
    <div>
      {
        coinData?.coins?.map((coin)=> { return renderCoinList(coin) })
      }
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    'https://api.coinstats.app/public/v1/coins?skip=0'
  );
  
  return {
    props: {
      coinData: data,
    },
    revalidate: 10,
  };
}

export default Coins;

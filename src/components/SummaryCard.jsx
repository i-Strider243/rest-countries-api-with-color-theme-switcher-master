import { Card, Image } from 'antd';
import { Link } from 'react-router';
const {Meta} = Card;

const SummaryCard = ({country}) => {
  const { flag, name, population, region, capital, id } = country;

  return (
    <Link to={`/countries/${country.name}`} id={id} className='link-card'>
      <Card
        hoverable
        variant='borderless'
        className="card"
        cover={<Image src={flag} alt={`${name} flag`} />}
      >
        <Meta
          title={
            <h2 style={{fontWeight:800,fontSize:"1.25rem",textWrap:"wrap"}}>{name}</h2>
          }
          style={{ textAlign: "left" }}
          description={
            <>
              <p style={{fontWeight: "bold"}}>
                Population: <span style={{fontWeight:"300"}}>{population}</span>
              </p>
              <p style={{fontWeight: "bold"}}>
                Region: <span style={{fontWeight:"300"}}>{region}</span>
              </p>
              <p style={{fontWeight: "bold", marginBottom:20}}>
                Capital: <span style={{fontWeight:"300"}}>{capital}</span>
              </p>
            </>
          }
        />
      </Card>
    </Link>
  );
}

export default SummaryCard

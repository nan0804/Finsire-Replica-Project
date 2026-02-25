import './Partners.css';
const partners = [
  { name: 'Spark Capital', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/693bf9d7672500f15bde5edb_Spark%20Capital.png' },
  { name: 'DEVX', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/693bf9d79f95f2e2b791efec_DEVX.png' },
  { name: 'iSeed', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/693bf9d796947461acd8e9ec_iSeed.png' },
  { name: '1947 Rise', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/693bf9d760d35ff50674c7a5_1947%20Rise.png' },
  { name: 'Google Pay', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4d7762a2cd49ecef66_Google%20Pay.png' },
  { name: 'Groww', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4d105b5ac81fa85b3f_Groww.png' },
  { name: 'SpaceX', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4deea1820b6792cf53_SpaceX.png' },
  { name: 'Razorpay', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4d16786469fe959168_Razorpay.png' },
  { name: 'Twitter', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bbb7e9382ac2311a9b01_Twitter.png' },
  { name: 'OYO', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4deea1820b6792cf56_OYO.png' },
  { name: 'Coinbase', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4d3a461bbe0ceb8168_Coinbase.png' },
  { name: 'ippopay', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4d33d399ab1f609738_ippopay.png' },
  { name: 'DevC', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4dbf3ecd5e94518519_DevC.png' },
  { name: 'Tracxn', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4d1bee4131dc709a0a_Trancxn.png' },
  { name: 'digio', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/693bf9d7a31b3711de03314e_digio.png' },
  { name: 'LetsVenture', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4d223cfd256eb7eba5_LVX%20(LetsVenture).png' },
  { name: 'GrowthCap.VC', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bb4dac3df22be34d3970_GrowthCap.VC.png' },
  { name: 'INT.', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/693bf9d7567ae9b97e2847ec_INT..png' },
  { name: '77 Capital', img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/693bf9d738ddb8637840901d_77%20Capital.png' },
];
export default function Partners() {
  const doubled = [...partners, ...partners];
  return (
    <section className="partners-section">
      <div className="partners-label">
        Backed by Institutions and Leaders from
      </div>
      <div className="partners-strip">
        <div className="partners-inner">
          {doubled.map((p, i) => (
            <img
              key={i}
              src={p.img}
              alt={p.name}
              className="partner-logo-img"
              title={p.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

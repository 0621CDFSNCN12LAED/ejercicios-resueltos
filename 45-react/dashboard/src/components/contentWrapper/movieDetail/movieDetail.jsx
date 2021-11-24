import movieImg from "../../../assets/images/mandalorian.jpg";

export default function MovieDetail(props) {
  return (
    <>
      <div class="text-center">
        <img
          class="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "40rem" }}
          src={movieImg}
          alt="Star Wars - Mandalorian"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        consequatur explicabo officia inventore libero veritatis iure voluptate
        reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem
        culpa citationem ratione aperiam voluptatum non corporis ratione aperiam
        voluptatum quae dolorem culpa ratione aperiam voluptatum?
      </p>
      <a class="btn btn-danger" target="_blank" rel="nofollow" href="/">
        View movie detail
      </a>
    </>
  );
}

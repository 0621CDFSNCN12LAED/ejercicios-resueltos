import ContentCard from "./contentCard/contentCard";
import ContentRowTop from "./contentRowTop/contentRowTop";
import Footer from "./footer/footer";
import TopNavBar from "./topNavBar/topNavBar";

import movieImg from "../../assets/images/mandalorian.jpg";

const categories = [
  "Acción",
  "Animación",
  "Aventura",
  "Ciencia Ficción",
  "Comedia",
  "Documental",
  "Drama",
  "Fantasia",
  "Infantiles",
  "Musical",
];

export default function ContentWrapper() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopNavBar />

        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>

          <ContentRowTop />

          <div class="row">
            <ContentCard title="Last movie in Data Base">
              <div class="text-center">
                <img
                  class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "40rem" }}
                  src={movieImg}
                  alt="Star Wars - Mandalorian"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, consequatur explicabo officia inventore libero
                veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                voluptatum non corporis quae dolorem culpa citationem ratione
                aperiam voluptatum non corporis ratione aperiam voluptatum quae
                dolorem culpa ratione aperiam voluptatum?
              </p>
              <a class="btn btn-danger" target="_blank" rel="nofollow" href="/">
                View movie detail
              </a>
            </ContentCard>

            <ContentCard>
              <div class="row">
                {categories.map((category) => {
                  return (
                    <div class="col-lg-6 mb-4">
                      <div class="card bg-dark text-white shadow">
                        <div class="card-body">{category}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ContentCard>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

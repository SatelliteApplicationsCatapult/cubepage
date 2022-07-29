import Back from "../components/generic/Back";
import { useParams } from "react-router";
import "../assets/styles/docs.scss";
import { docs } from "../constants/consts";

const Docs = ({ tasks }) => {
  const { taskName } = useParams();

  return (
    <div className="content">
      <Back />
      <div className="docs-container">
        <div className="docs-content">
          {docs[taskName] &&
            docs[taskName].map((doc, index) => (
              <div key={index} className={`docs-content__item`}>
                {doc.type === "header" && (
                  <div className="docs-header">
                    <h2>{doc.text}</h2>
                  </div>
                )}

                {doc.type === "paragraph-with-image" && (
                  <div
                    className={`docs-paragraph-with-image-${doc.direction} docs-paragraph-with-image`}
                  >
                    <div className={`docs-paragraph-with-image__image `}>
                      <img
                        src={`/docs/${taskName}/${doc.image}`}
                        alt={doc.subheading}
                        className={`fit-${doc.imagefit}`}
                      />
                    </div>
                    <div className="docs-paragraph-with-image__text">
                      <h3>{doc.subheading}</h3>
                      <p>{doc.text}</p>
                    </div>
                  </div>
                )}

                {doc.type === "paragraph-with-multiple-images" && (
                  <div
                    className={`docs-paragraph-with-multiple-images-${doc.direction} docs-paragraph-with-multiple-images`}
                  >
                    <div className="docs-paragraph-with-multiple-images__text">
                      <h3>{doc.subheading}</h3>
                    </div>
                    <p>{doc.text}</p>
                    <div className="docs-paragraph-with-multiple-images__images">
                      {doc.images.map((image, index) => (
                        <div
                          key={index}
                          className="docs-paragraph-with-multiple-images__image"
                        >
                          <img
                            src={`/docs/${taskName}/${image.image}`}
                            alt={image.caption}
                          />
                          <p>{image.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {doc.type === "coming-soon" && (
                  <div className="docs-coming-soon">
                    <img src="/docs/coming-soon.png" alt="coming-soon" />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Docs;

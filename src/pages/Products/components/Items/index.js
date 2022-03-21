import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Button } from "react-bootstrap";

import DefaultImg from "../../../../assets/images/no_image.png";
import { useTranslation } from "react-i18next";

const propTypes = {
  services: PropTypes.array,
  goToDetail: PropTypes.func,
  loadMore: PropTypes.func,
  totalPage: PropTypes.number,
  currentPage: PropTypes.number,
};

const Items = ({ services, goToDetail, loadMore, totalPage, currentPage }) => {
  const { t } = useTranslation();

  return (
    <Row>
      {services && services.length > 0 ? (
        services.map((service, i) => {
          return (
            <Col xs={12} lg={4} key={i}>
              <div className="item">
                <div className="image">
                  <img
                    src={
                      service.Images !== null
                        ? service.Images[0].Url
                        : DefaultImg
                    }
                    alt={service.Name}
                  />
                </div>
                <div className="info">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      goToDetail(service.Id);
                    }}
                  >
                    <div className="title">{service.Name}</div>
                  </a>

                  <div className="address">
                    {service.PhysicalAddress.Line1},{" "}
                    {service.PhysicalAddress.City},{" "}
                    {service.PhysicalAddress.PostCode}
                  </div>
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: service.LongDescription,
                    }}
                  ></div>
                  <div className="price">
                    {service.Availability.Calendar.LowestRate &&
                      `From ¥ ${service.Availability.Calendar.LowestRate}`}
                  </div>
                </div>
                <div className="buttonWrapper">
                  <Button
                    className="btnView"
                    onClick={() =>
                      goToDetail(service.Id, service.OnRequestOnly)
                    }
                  >
                    {t("view_details")}
                  </Button>
                </div>
              </div>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">{t("not_found")}</h3>
      )}

      <div className="loadMore">
        {totalPage > 1 && totalPage > currentPage && (
          <Button
            variant="secondary"
            className="w-100 fw-bold py-3 fs-5"
            onClick={() => loadMore()}
          >
            {t("load_more")}
          </Button>
        )}
      </div>
    </Row>
  );
};

Items.propTypes = propTypes;

export default Items;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CSSProperties } from 'styled-components';
import { useAppDispatch, useAppSelect } from '../../store/configureStore.hooks';
import {
  fetchPortfolioAsync,
  fetchPortfolioByIdAsync,
  getPortfolioConcept,
} from '../../store/modules/portfolio';
import { Button } from '../@shared/button';
import { Container } from '../@shared/container';
import { DecoratedContainer } from '../@shared/decoratedContainer';
import { StyledLink } from '../@shared/link';
import { Text } from '../@shared/text';
import PortfolioInterface from '../consultant/portfolioList';

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState<PortfolioInterface>();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPortfolioByIdAsync(id)).then((data) => {
      setPortfolio(data.payload);
    });
  }, []);

  return (
    <>
      <Container height="300px" style={PortfolioHeaderCSS}>
        <Container width="1136px" position="relative">
          <Text className="KRDisplay-2 gray001" style={PortfolioTitleCSS}>
            {portfolio?.title}
          </Text>
          <Container
            style={PortfolioHeaderTextContainerCSS}
            height="28px"
            justifyContent="left"
          >
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText1CSS}>
              공간
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText2CSS}
            >
              {portfolio?.numberOfRooms}
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText3CSS}>
              평수
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText4CSS}
            >
              {portfolio?.floorSpace}평
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText5CSS}>
              스타일
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText6CSS}
            >
              {portfolio?.concept}
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText7CSS}>
              범위
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText8CSS}
            >
              {portfolio?.consultingRange}
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText9CSS}>
              총금액
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText10CSS}
            >
              {Number(portfolio?.budget) / 10000 + '만원'}
            </Text>
          </Container>
        </Container>
        <Container
          width="1136px"
          height="222px"
          style={PortfolioConsultantContainerCSS}
        >
          <Container
            style={PortfolioConsultantContainerDecoratorCSS}
            height="12px"
          ></Container>
          <Text
            className="KRHeadline-1 gray001"
            style={PortfolioConsultantIdCSS}
          >
            {portfolio?.user.nickname}
          </Text>
          <Text className="KRBody-2 gray002" style={PortfolioCostCSS}>
            평당 {Number(portfolio?.pricePerUnit) / 10000}만원
          </Text>
          <Text className="KRHeadline-2 orange001" style={PortfolioCapacityCSS}>
            {portfolio?.numberOfPossibleConsulting}명 가능
          </Text>
          <Container style={PortfolioConsultantInfoCSS}>
            <Text className="KRBody-2 gray001">{portfolio?.introduction}</Text>
          </Container>
          <StyledLink to="../application/consulting">
            <Button
              width="92px"
              height="32px"
              style={PortfolioConsultantButtonCSS}
            >
              <Text className="KRHeadline-3 gray007">컨설팅 신청</Text>
            </Button>
          </StyledLink>
        </Container>
      </Container>
      <Container height="128.4px" style={PortfolioBodyContainerCSS}></Container>
      <Container style={PortfolioBodyContainerCSS}>
        <Container
          className="KRBody-2 gray001"
          width="1136px"
          style={PortfolioBodyCSS}
          justifyContent="start"
          alignItems="start"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'right',
            }}
          >
            {portfolio?.images?.map((element) => {
              return (
                <>
                  <img src={element?.url} style={{ width: '830px' }}></img>

                  <br />
                </>
              );
            })}

            {portfolio?.description}
          </div>
        </Container>
      </Container>
    </>
  );
};

const PortfolioHeaderCSS: CSSProperties = {
  backgroundColor: 'var(--brand-yellow-001)',
};
const PortfolioTitleCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '76px',
};
const PortfolioHeaderTextContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '130px',
};

const PortfolioHeaderText1CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText2CSS: CSSProperties = {
  marginRight: '30px',
};
const PortfolioHeaderText3CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText4CSS: CSSProperties = {
  marginRight: '30px',
};
const PortfolioHeaderText5CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText6CSS: CSSProperties = {
  marginRight: '30px',
};
const PortfolioHeaderText7CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText8CSS: CSSProperties = {
  marginRight: '30px',
};
const PortfolioHeaderText9CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText10CSS: CSSProperties = {
  marginRight: '30px',
};

const PortfolioConsultantContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '287px',
  backgroundColor: 'var(--gray-white)',
  borderRadius: '10px',
};

const PortfolioConsultantContainerDecoratorCSS: CSSProperties = {
  position: 'absolute',
  top: 0,
  backgroundColor: 'var(--brand-orange-003)',
};

const PortfolioConsultantIdCSS: CSSProperties = {
  position: 'absolute',
  left: '40px',
  top: '41px',
};

const PortfolioCostCSS: CSSProperties = {
  position: 'absolute',
  left: '40px',
  top: '75px',
};
const PortfolioCapacityCSS: CSSProperties = {
  position: 'absolute',
  left: '127px',
  top: '75.4px',
};

const PortfolioConsultantInfoCSS: CSSProperties = {
  position: 'absolute',
  left: '40px',
  top: '127.4px',
  width: '850px',
  height: '64px',
};

const PortfolioConsultantButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '46px',
  right: '42.5px',
  borderRadius: '3px',
};

const PortfolioBodyContainerCSS: CSSProperties = {
  backgroundColor: 'var(--gray-gray-007)',
};

const PortfolioBodyCSS: CSSProperties = {
  backgroundColor: 'var(--gray-gray-007)',
  padding: '64px 145px',
};

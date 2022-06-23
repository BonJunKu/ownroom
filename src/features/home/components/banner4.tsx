import { CSSProperties, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../common/button';
import { Container } from '../../../common/container';
import { Img } from '../../../common/img';
import { useAppSelect } from '../../../store/configureStore.hooks';
import { getUserInfo } from '../../../store/modules/user';
import { Text } from '../../../common/Text';

export const Banner4 = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<boolean>(false);
  const { isLoggedIn, consultantRegisterStatus } = useAppSelect(getUserInfo);
  const handleClick = () => {
    if (!isLoggedIn) {
      alert('로그인 후 이용이 가능한 서비스입니다.');
      navigate('/login');
    } else if (consultantRegisterStatus === '신청 후') {
      alert('현재 컨설턴트 신청 서류를 심사 중입니다.');
    } else if (consultantRegisterStatus === '승인 완료') {
      alert('이미 컨설턴트 승인이 완료되었습니다.');
    } else {
      navigate('/consultant/application');
    }
  };
  useEffect(() => {
    if (consultantRegisterStatus === '신청 전') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <Container height="420px" style={BackGroundColorCSS}>
      <Container width="1920px" position="relative" style={BackGroundColorCSS}>
        <Container
          width="1016px"
          position="absolute"
          style={BackGroundColorCSS}
        >
          <Img
            src={process.env.PUBLIC_URL + 'img/home/home4.png'}
            width="550px"
            height="320px"
            style={Banner4ImgCSS}
          />
          <Text className="KRDisplay-2 orange001" style={Banner4Text1CSS}>
            누구나 컨설턴트가 <br />될 수 있습니다.
          </Text>
          <Text className="KRBody-2 gray002" style={Banner4Text2CSS}>
            인테리어에 관심이 많고 자신만의 노하우가 있다면 <br />
            누구나 컨설턴트 신청이 가능합니다.
            <br /> 온룸에서 나만의 컨설팅을 직접 진행해 보세요.
          </Text>

          <Button
            width="146px"
            height="44px"
            top="305px"
            left="0"
            onClick={handleClick}
            isActive={isActive}
          >
            <Text className="KRHeadline-2 graywhite">컨설턴트 신청하기</Text>
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

const BackGroundColorCSS: CSSProperties = {
  backgroundColor: 'var(--gray-gray-007)',
};

const Banner4ImgCSS: CSSProperties = {
  position: 'absolute',
  right: 0,
};

const Banner4Text1CSS: CSSProperties = {
  position: 'absolute',
  top: '71px',
  left: 0,
};

const Banner4Text2CSS: CSSProperties = {
  position: 'absolute',
  top: '181px',
  left: 0,
};

import React from 'react';
import SC from 'components/styled/common';

function Career3() {
  return (
    <section>
      <SC.Row>
        <SC.Column>
          <SC.Company></SC.Company>
        </SC.Column>
      </SC.Row>
      <SC.Divider />
      <SC.Row>
        <SC.Column>
          <SC.Company>리보이스</SC.Company>
          <SC.Description>개발팀장 / 백엔드 개발자</SC.Description>
          <SC.Description>(19.09.01 ~ 20.06.30)</SC.Description>
          <SC.Description>- 약 10개월</SC.Description>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.RowHeader>
              한진 토파스여행정보와 항공권 음성 검색 솔루션 개발(한진관광,
              롯데JTB)
            </SC.RowHeader>
          </SC.Row>
          <SC.Wrapper>
            <SC.Stack>Node.js, Express, nugu-kit</SC.Stack>
          </SC.Wrapper>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                  <SC.MarkerList>
                    SKT AI 음성 스피커 NUGU를 활용한 서비스로 실시간 항공권을
                    음성으로 손쉽게 검색하고 가장 저렴한 여행 날짜를 추천하는 등
                    항공권을 음성 검색으로 제공하는 서비스 입니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>담당 업무</SC.Wrapper>
                  <SC.MarkerList>
                    음성 검색 프로세스를 설계하고 주요 비즈니스 로직을
                    담당했습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>개발 기간</SC.Wrapper>
                  <SC.MarkerList>2020.01 ~ 2020.05 (5개월)</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.List>
                <SC.Wrapper>성과</SC.Wrapper>
                <SC.MarkerList>
                  2020.09 롯데제이티비, 한진관광 NUGU play 앱 런칭 및 항공권
                  검색 사이트 유입률 증가에 기여
                </SC.MarkerList>
                <SC.MarkerList>
                  음성 인터페이스를 활용한 AI 대화형 항공권 검색 시스템 개발{' '}
                  <a href="#manuscript">KIICE 원고</a>
                  작성을 통해 자연스러운 대화형 음성 서비스를 제공하는 기반을
                  마련
                </SC.MarkerList>
              </SC.List>
            </ul>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Career3;

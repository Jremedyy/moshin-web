import styled from "styled-components";

const DecorativeBreak = () => {
  return (
    <Wrapper>
      <FloatingBox />
    </Wrapper>
  );
};

export default DecorativeBreak;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: var(--font-color-secondary);
  position: relative;
  background-color: #35393b25;
`;

const FloatingBox = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 8px;
  background-color: #388f94;
`;

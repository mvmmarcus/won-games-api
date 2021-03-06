import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${(props) => props.theme.main.colors.won.blue};
  bottom: 0;
  .poweredBy {
    width: 100%;
    bottom: 0;
    height: 3rem;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    vertical-align: middle;
    color: ${({ theme }) => theme.main.colors.strapi["gray-light"]};
  }
`;

const A = styled.a`
  color: ${(props) => props.theme.main.colors.won.pink};

  &:hover {
    color: ${(props) => props.theme.main.colors.won.pink};
    text-decoration: underline;
  }
`;

export default Wrapper;
export { A };

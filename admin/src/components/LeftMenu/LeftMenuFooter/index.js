/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import { PropTypes } from "prop-types";
import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter({ version }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        Desenvolvido por &nbsp;
        <A
          href={`https://github.com/mvmmarcus`}
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marcus Vinicius
        </A>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;

import React from 'react';
import {Button} from 'reactstrap';
import styled from 'styled-components';

function CTA() {

    const CTA = styled.div`
        margin-top: 40px;
    `
    return(
        <CTA className="CTA">
            <a href="#previous-APODs">
                <Button>Previous APODs {"\u25BC"}</Button>
            </a>
        </CTA>
    )
}

export default CTA
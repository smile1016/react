import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    table{
        tr{
            td{
                text-align:center;
                width:200px;
                img{
                    width:100px;
                    height:100px
                }
            }
        }
    }
    .edit-container{
        width:400px;
        height:400px;
        background:pink;
        position:fixed;
        top:100px;
        right:400px;
    }
`;
export {
    Container
}
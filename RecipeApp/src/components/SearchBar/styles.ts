import styled from "styled-components";

export const SearchContainer=styled.div`

        background: linear-gradient(to bottom right, #ffffff, #f7f7f7);
        min-height: 100vh;
        padding-top: 30px;
        padding-bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

`

export const SearchBarContainer=styled.div`

          position: relative;
          width: 400px;
          max-width: 90%;
`

export const SearchIcon=styled.i`

            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            color: #ff6347;
            font-size: 20px;
    
`

export const SearchInput=styled.input`
            backgroundColor: #ffffff;
            color: #333;
            border: 1px solid #ff6347;
            border-radius: 25px;
            padding: 12px 45px;
            fontSize: 16px;
            boxShadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s;
            width: 100%;
          
`

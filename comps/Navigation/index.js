import styled from 'styled-components';
import { useRouter } from 'next/router';

const MainCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: linear-gradient(360deg, rgba(16, 16, 16, 0.7) 8.43%, rgba(0, 0, 0, 0.9) 100%);
    box-shadow: inset 0px -4px 5px rgba(200, 200, 200, 0.2);
    border: none;
    width: 380px;
    height: 80px;
`;

const LogoCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CallCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
`;

const FaqCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
`;

const ReportCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
`;

const Image = styled.img`
    margin: 10px;
    width: 40px;
    &:hover {
        width: 60px;
        transition: 0.5s;
    }
`;

const Text = styled.h3`
    display: flex;
    color: #fff;
    margin-top: -10px;
    font-size: 16px;
    /* &:hover {
         color: #FF6700;
    } */
`;

const Navigation = ({
    onButtonClick = () => {}
}) => {
    const router = useRouter();

    return (
        <MainCont>
            <LogoCont onClick={() => router.push("/")}>
                <Image src={"/VigilantLogo.png"} />
                <Text>Home</Text>
            </LogoCont>

            <CallCont onClick={() => router.push("/contact")}>
                <Image src={"/phone-call.png"} />
                <Text>Call</Text>
            </CallCont>

            <FaqCont onClick={() => router.push("/faq")}>
                <Image src={"/question.png"} />
                <Text>FAQ</Text>
            </FaqCont>

            <ReportCont onClick={onButtonClick}>
                <Image src={"/reportbutton.png"} />
                <Text>Report</Text>
            </ReportCont>
        </MainCont>
    )
};

export default Navigation;
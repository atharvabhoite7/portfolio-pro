import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserName(props) {
    return (
        <section>
            <Header data={props.userData} isEdit={false} />
            <AboutMe data={props.userData} isEdit={false} />
            <Skills data={props.userData} isEdit={false} />
            <Projects data={props.userData} isEdit={false} />
            <Experience data={props.userData} isEdit={false} />
            <Achievements data={props.userData} isEdit={false} />
            <Contact data={props.userData} isEdit={false} />
            <Footer data={props.userData} isEdit={false} />
        </section>
    );
}

export async function getServerSideProps({ resolvedUrl }) {
    const id = resolvedUrl.slice(1);
    let userData = null;
    await axios
        .get(`http://localhost:3000/api/user-profile?id=${id}`)
        .then((res) => {
            userData = res.data;
        })
        .catch((err) => {
            console.log("err", err);
        });

    return {
        props: { userData },
    };
}
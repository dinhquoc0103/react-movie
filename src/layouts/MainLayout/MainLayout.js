import styles from "./MainLayout.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function MainLayout({ children }) {
    return (
        <div className="container">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
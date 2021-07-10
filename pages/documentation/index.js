import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Layout from '../../layout';

const Documentation = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>
                    Documentation Page
                </h1>
                <Link href="/" passHref><button className={styles.btnBack}>Back To Home Page</button></Link>
            </div>
        </Layout>
    );
}

export default Documentation;
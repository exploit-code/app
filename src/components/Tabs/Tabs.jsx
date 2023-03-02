import styles from './Tabs.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Tabs_component() {
    return (
        <Tabs className={styles.tab}>
            <TabList className={styles.tab__list}>
                <Tab className={styles.tab__title}>Title 1</Tab>
                <Tab className={styles.tab__title}>Title 2</Tab>
            </TabList>

            <div>
                <TabPanel>
                    <div className='tabPanel__head'></div>
                    <div className='tabPanel__body'></div>
                </TabPanel>
                <TabPanel>
                    Any content 2
                </TabPanel>
            </div >
        </Tabs>
    )
}
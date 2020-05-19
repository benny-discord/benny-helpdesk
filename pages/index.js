import ActionCard from '../components/ActionCard'
import Link from 'next/link'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

export default function ({ props, categories }) {
    return (
        <div style={{ textAlign: "center", padding: "4%" }}>
            <h1>Wizard Help</h1>

            <p>Find all the information you need to use Wizard.</p>

            <Grid fluid>
                <Row>
                    {categories.map(c=>{
                        return <Col xs={12} sm={6} md={4}>
                            <Link href={`/docs/${c.fname}`}>
                                <ActionCard title={c.name}>
                                    <p>
                                        {c.description}
                                    </p>
                                </ActionCard>
                            </Link>
                        </Col>
                    })}
                </Row>
            </Grid>
        </div>
    );
}

export async function getStaticProps () {
    let returned = []

    const fs = require('fs')
    const path = require('path')
    const postsDirectory = path.join(process.cwd(), 'pages', 'docs')
    const filenames = fs.readdirSync(postsDirectory, { withFileTypes: true })
        .filter(d => d.isDirectory())
    
    await (async function(){
        for (let i = 0; i < filenames.length; i++) {
            let ux = filenames[i]
    
            import(`./docs/${ux.name}/index.js`)
                .then(x => {
                    returned.push({
                        fname: ux.name,
                        name: x.info.name,
                        description: x.info.description
                    })
                })
        }
    })()
        
    return {
        props: {
            categories: returned
        }
    }
}
import React from 'react'
import syn from './synopsis.module.css'

//  **TODO: fix reload bug

export default function Synopsis() {
    return (
        <container className={syn.synBackground}>
            <div className={syn.wrapper}>
                <div className={syn.scrollText}>
                    <h1 className={syn.centerText}>* somewhere in a not so</h1>
                    <h1 className={syn.centerText}>parallel universe *</h1>
                    <br />
                    <br />
                    <p>After a very unfortunate situation with a cup of noodles, a fork and microwave. Our protagonist, a young Howard, ends up in a coma which in turn may be a blessing in disguise.</p>
                    <p>After a few weeks of his hospital stay our young protagonist needs to acclimate himself back into society. But in case you weren't familiar with who Howard was before the accident that may be easier said than done.</p>
                    <p>Luckily for Howard he was always able to rely on his single father, Hank, who immediately gets him a job.</p>
                    <p>Howard however seems to  find himself falling back into his old drinking habits and blackouts. Maybe nothing had changed, no lesson learned for Howard, his friends on the other hand soon discover that Howard had picked up a knack to be a very exquisite cook throughout his blackouts.</p>
                    <p>Blackouts never just bring cheer and good food, let’s be real, they also get Howard put on the Italian mobs radar.</p>
                    <p>How and why is the mob after some no name, black'd out drunk dare I say.......</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 className={syn.centerText}>5 star chef?</h3>
                </div>
        </div>
        </container>
    )
}

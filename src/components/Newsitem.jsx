import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        const badges = {
            general: 'secondary',
            business: 'warning',
            entertainment: 'info',
            health: 'success',
            science: 'primary',
            sports: 'danger',
            technology: 'dark'
        }

        let { title, description, imageUrl, newsUrl, date, author, source, category } = this.props;

        let badgeColor = badges[category] || 'secondary';

        return (
            <div>
                <div className="card h-100" style={{ width: '100%' }}>
                    <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${badges[category]}`} style={{ left: '90%', zIndex: '1' }}>
                        From {source}
                    </span>
                    <img src={imageUrl ? imageUrl : 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DW4IYWG52VFDBJ3JHIEF6OUX3Q.jpg&w=1440'} className="card-img-top" alt="..." />
                    <div className="card-body bg-dark text-white">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="" style={{ opacity: '.7' }}>By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-primary" target="_blank">Read More...</a>

                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
function PageHeader({ title, pageType }: Readonly<{ title: string, pageType: string }>) {
    let fill;
    let className;
    let viewBox;
    type FillRuleType = "evenodd" | "inherit" | "nonzero" | undefined;
    let fillRule1: FillRuleType;
    let imagePath1;
    let fillRule2: "evenodd" | "inherit" | "nonzero" | undefined;
    let imagePath2;
    let fillRule3: "evenodd" | "inherit" | "nonzero" | undefined;
    let imagePath3;
    switch (pageType) {
        case 'product':
            fill = 'currentColor';
            viewBox = '0 0 64 64';
            className = 'bi bi-box-seam-fill';
            fillRule1 = undefined;
            imagePath1 = 'M32,13A19,19,0,1,0,51,32,19.021,19.021,0,0,0,32,13Zm0,36A17,17,0,1,1,49,32,17.019,17.019,0,0,1,32,49Z';
            fillRule2 = undefined;
            imagePath2 = 'M13 21V11H11v9H10V11H8v9H7V11H5v9H4V11H2V26a3.006 3.006 0 0 0 2 2.829V52a3 3 0 0 0 3 3H8a3 3 0 0 0 3-3V28.829A3.006 3.006 0 0 0 13 26zm-2 5a1 1 0 0 1-1 1 1 1 0 0 0-1 1V52a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V28a1 1 0 0 0-1-1 1 1 0 0 1-1-1V22h7zM61 10a9.01 9.01 0 0 0-9 9V32a3 3 0 0 0 3 3V54a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V11A1 1 0 0 0 61 10zM60 53H57V34a1 1 0 0 0-1-1H55a1 1 0 0 1-1-1V19a7.011 7.011 0 0 1 6-6.929z';
            fillRule3 = undefined;
            imagePath3 = 'M32,22A10,10,0,1,0,42,32,10.011,10.011,0,0,0,32,22Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,32,40Z';
            break;
        case 'category':
            fill = 'currentColor';
            viewBox = '0 0 16 16';
            className = 'bi bi-tags-fill';
            fillRule1 = undefined;
            imagePath1 = 'M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3';
            fillRule2 = undefined;
            imagePath2 = 'M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z';
            break;
        case 'partyPlatter':
            viewBox = '0 0 16 16';
            fill = 'currentColor';
            className = 'bi bi-egg-fried';
            fillRule1 = undefined;
            imagePath1 = 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6';
            fillRule2 = undefined;
            imagePath2 = 'M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z';
            break;
        default:
            fill = 'currentColor';
            viewBox = '0 0 16 16';
            className = 'bi bi-shop';
            fillRule1 = undefined;
            imagePath1 = 'M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z';
            fillRule2 = undefined;
            imagePath2 = '';
            break;
    }

    return (
        <div className="py-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill={fill}
                 className={className} viewBox={viewBox}>
                <path fillRule={fillRule1} d={imagePath1}/>
                <path fillRule={fillRule2} d={imagePath2}/>
                <path fillRule={fillRule3} d={imagePath3}/>
            </svg>
            <h2>{title}</h2>
        </div>
    );
}

export default PageHeader;
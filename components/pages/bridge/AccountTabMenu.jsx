import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip, OverlayTrigger, Image } from 'react-bootstrap'
import copy from "../../../assets/images/icons/copy.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useAccount } from 'wagmi';
const AccountTabMenu = () => {
    const [copyTextSourceCode, setCopyTextSourceCode] = useState("Copy address to clipboard")
    const pathName = usePathname()

    const { address, isConnected } = useAccount();
    const [isClient, setIsClient] = useState(false)
    const handleSourceCopy = () => {
        if (copyTextSourceCode === "Copy address to clipboard") {
            setCopyTextSourceCode("Copied.")
        }
    };
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {copyTextSourceCode}
        </Tooltip>
    );
    useEffect(() => {
        if (isConnected) {
            setIsClient(true)
        } else {
            setIsClient(false)
        }
    }, [])
    return (
        <>
            <div className='account_title'>
                <h3>Account</h3>
                {
                    isClient &&
                    <h6>
                        <span>{address}</span> <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 250 }}
                            overlay={renderTooltip}>

                            <CopyToClipboard text={address}>
                                <span className="d-inline-block"> <Image src={copy.src} alt='Copy Icon' fluid loading='lazy' onClick={handleSourceCopy} /> </span>
                            </CopyToClipboard>

                        </OverlayTrigger>
                    </h6>
                }
            </div>
            <div className='account_tabs'>
                <ul>
                    <li className={`${pathName == "/bridge/account" ? "active" : ""}`}><Link href="/bridge/account">Deposit</Link></li>
                    <li className={`${pathName == "/bridge/account/withdraw" ? "active" : ""}`}><Link href="/bridge/account/withdraw">Withdraw</Link></li>
                </ul>
            </div>
        </>
    )
}

export default AccountTabMenu
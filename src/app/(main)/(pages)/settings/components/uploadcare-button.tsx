'use client'
import React, { useState, useEffect } from 'react'
import { FileUploaderRegular, UploadcareFile, UploadcareFileGroup } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import { useRouter } from 'next/navigation';

type Props = {
    onUpload?: (cdnUrl: string) => Promise<any>
};

type File = UploadcareFile & {
    cdnUrl: string;
    uuid: string;
    fileInfo: {
        originalFilename: string;
    };
};

const UploadCareButton: React.FC<Props> = ({ onUpload }) => {
    const [files, setFiles] = useState<File[]>([]);
    const router = useRouter();

    const handleChangeEvent = (items: UploadcareFileGroup) => {
        const successfulFiles = items.allEntries.filter((file) => file.status === 'success') as File[];
        setFiles(successfulFiles);
    };

    useEffect(() => {
        const handleUpload = async (e: CustomEvent) => {
            if (onUpload) {
                const file = await onUpload(e.detail.cdnUrl);
                if (file) {
                    router.refresh();
                }
            }
        };

        return () => {
            // Clean up event listener here if any
        };
    }, [onUpload, router]);

    return (
        <div>
            <FileUploaderRegular onChange={handleChangeEvent} pubkey="006dbbaa8f6467a5864c" />
            <div>
                {files.map((file) => (
                    <div key={file.uuid}>
                        <img src={file.cdnUrl} alt={file.fileInfo.originalFilename} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadCareButton;

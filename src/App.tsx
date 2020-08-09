import React, { useState } from 'react';
import { Flex, useToast } from '@chakra-ui/core';
import { SpoilerLog } from './types/spoilerLog';
import { Upload, Dashboard } from './features';

const App = () => {
    const [spoilerLog, setSpoilerLog] = useState<SpoilerLog>(),
        toast = useToast();

    const handleError = () => {
        toast({
            title: 'Invalid format',
            description: 'JSON file is not a valid spoiler log format',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top',
        });
    };

    if (!spoilerLog) {
        return (
            <Flex
                align="center"
                justify="center"
                direction="column"
                paddingTop="25vh"
            >
                <Upload onSuccess={setSpoilerLog} onError={handleError}>
                    Upload Spoiler Log
                </Upload>
            </Flex>
        );
    }

    return (
        <Flex padding="1em" direction="column">
            <Dashboard
                spoilerLog={spoilerLog}
                onReset={() => setSpoilerLog(undefined)}
            />
        </Flex>
    );
};

export default App;

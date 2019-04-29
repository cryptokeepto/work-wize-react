import React from "react"
import { Box, Image, Heading, Text, Stack } from "grommet";

class ProductItem extends React.Component {
    render() {
        const { name, description, image, price } = this.props
        return (
            <Box
                direction="column"
                basis="medium"
                pad="small"
            >
                <Box>
                    <Stack fill anchor="top-right">
                        <Box height="small">
                            <Image fit="cover" src={image}></Image>
                        </Box>
                        <Box background="brand" pad="xsmall">
                            <Text>{price}</Text>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Heading textAlign="center" level={4} margin={{ vertical: "xsmall" }}>
                        {name}
                    </Heading>
                    <Text textAlign="center">
                        {description}
                    </Text>
                </Box>

            </Box>
        )
    }
}

export default ProductItem
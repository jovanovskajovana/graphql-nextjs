import { FC } from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'

import { SHIP_DETAILS_QUERY } from '../../api/queries'

import ArrowLeft from '../../components/icons/ArrowLeft'
import ArrowCurved from '../../components/icons/ArrowCurved'
import InfoCard from '../../components/icons/InfoCard'

import { ShipDetails } from '../../interfaces/data'

import { Container } from '../../styles/Layout'
import { Loader } from '../../styles/Loader'
import { Title, BodyM, BodyS } from '../../styles/Typography'
import { ShipStyled, ShipDataStyled } from '../../styles/pages/ShipStyled'
import { Button } from '../../styles/Button'

export const Ship: FC = () => {
  const theme = useTheme()
  const router = useRouter()

  const {
    query: { id },
  } = router

  const { data, loading, error } = useQuery<ShipDetails>(SHIP_DETAILS_QUERY, {
    variables: { id },
  })

  const handleBack = () => router.back()

  const getContent = () => {
    if (loading) {
      return <Loader />
    }

    if (error) {
      return <Title>{error.message}</Title>
    }

    if (!data?.ship) {
      return <Title>There are no details for this ship</Title>
    }

    return (
      <ShipDataStyled bgImage={data.ship.image}>
        <div className="cover">
          <Button className="btn" onClick={handleBack}>
            <ArrowLeft />
          </Button>
          <div className="cover-img" />
          <div className="cover-info">
            <Title>{data.ship.name}</Title>
            <BodyM color={theme.textSecondary}>{data.ship.type}</BodyM>
          </div>
        </div>
        <Container column mobileColumn alignItems="center">
          <div className="section basic-info">
            <div className="section-title">
              <BodyM
                fontFamily={theme.fontSecondary}
                color={theme.textHighlight}
              >
                Basic info
              </BodyM>
              <ArrowCurved className="icon" color={theme.textHighlight} />
            </div>
            {data.ship.year_built && (
              <div className="info-card">
                <div className="info-card-text">
                  <BodyM
                    fontFamily={theme.fontSecondary}
                    color={theme.textSecondary}
                  >
                    Year built
                  </BodyM>
                  <BodyM weight={700}>{data.ship.year_built}</BodyM>
                </div>
                <InfoCard className="info-card-bg" />
              </div>
            )}
            {data.ship.weight_kg && (
              <div className="info-card">
                <div className="info-card-text">
                  <BodyM
                    fontFamily={theme.fontSecondary}
                    color={theme.textSecondary}
                  >
                    Weight
                  </BodyM>
                  <BodyM weight={700}>{data.ship.weight_kg} kg</BodyM>
                </div>
                <InfoCard className="info-card-bg" />
              </div>
            )}
            {data.ship.class && (
              <div className="info-card">
                <div className="info-card-text">
                  <BodyM
                    fontFamily={theme.fontSecondary}
                    color={theme.textSecondary}
                  >
                    Class
                  </BodyM>
                  <BodyM weight={700}>{data.ship.class}</BodyM>
                </div>
                <InfoCard className="info-card-bg" />
              </div>
            )}
            {data.ship.home_port && (
              <div className="info-card">
                <div className="info-card-text">
                  <BodyM
                    fontFamily={theme.fontSecondary}
                    color={theme.textSecondary}
                  >
                    Home port
                  </BodyM>
                  <BodyM weight={700}>{data.ship.home_port}</BodyM>
                </div>
                <InfoCard className="info-card-bg" />
              </div>
            )}
          </div>
          {data.ship.missions && (
            <div className="section missions">
              <div className="section-title">
                <BodyM
                  fontFamily={theme.fontSecondary}
                  color={theme.textHighlight}
                >
                  Missions
                </BodyM>
                <ArrowCurved className="icon" color={theme.textHighlight} />
              </div>
              {data.ship.missions.map((mission, index) => (
                <div className="mission" key={index}>
                  <BodyM weight={700}>{mission.name}</BodyM>
                  <BodyS>{mission.flight}</BodyS>
                </div>
              ))}
            </div>
          )}
          <div className="section back">
            <Button onClick={handleBack}>
              <ArrowLeft />
            </Button>
            <BodyM fontFamily={theme.fontSecondary} color={theme.textHighlight}>
              Back to the list
            </BodyM>
          </div>
        </Container>
      </ShipDataStyled>
    )
  }

  return <ShipStyled>{getContent()}</ShipStyled>
}

export default Ship

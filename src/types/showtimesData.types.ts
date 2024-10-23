export interface ShowtimesData {
  movie: {
    synopsis: string;
    synopsis_json: {
      __typename: string;
      body: {
        type: string;
        children: {
          text: string;
        }[];
      }[];
    };
    __typename: string;
    internalId: number;
    id: string;
    poster: {
      __typename: string;
      id: string;
      internalId: number;
      url: string;
      path: string;
    };
    title: string;
    originalTitle: string;
    type: string;
    runtime: string;
    genres: {
      id: number;
      translate: string;
      tag: string;
    }[];
    languages: string[];
    data: {
      __typename: string;
      seo: {
        __typename: string;
        browsable: boolean;
        title: string | null;
      };
      productionYear: number;
    };
    stats: {
      userRating: {
        score: number;
        count: number;
      };
      userReview: {
        count: number;
      };
      pressReview: string | null;
      metric: {
        hits: number;
        sessions: number;
      };
      wantToSeeCount: number;
    };
    editorialReviews: any[];
    releases: {
      __typename: string;
      releaseDate: {
        __typename: string;
        date: string;
        precision: string;
      };
      name: string;
      certificate: string | null;
      advice: string | null;
      companyLimitation: string | null;
      releaseTags: {
        tagTypes: string[];
        tagFlags: string | null;
      };
      visaNumber: string;
    }[];
    credits: {
      person: {
        __typename: string;
        internalId: number;
        lastName: string;
        firstName: string;
        seo: {
          __typename: string;
          browsable: boolean;
        };
        picture: {
          __typename: string;
          id: string;
          internalId: number;
          url: string;
          path: string;
        };
        appearanceStats: {
          __typename: string;
          totalMovies: number;
          totalSeries: number;
        };
      };
      position: {
        __typename: string;
        name: string;
        department: string;
      };
      rank: number;
    }[];
    cast: {
      __typename: string;
      edges: {
        node: {
          actor: {
            __typename: string;
            internalId: number;
            lastName: string;
            firstName: string;
            seo: {
              __typename: string;
              browsable: boolean;
            };
            picture: {
              __typename: string;
              id: string;
              internalId: number;
              url: string;
              path: string;
            } | null;
            appearanceStats: {
              __typename: string;
              totalMovies: number;
              totalSeries: number;
            };
          };
          voiceActor: string | null;
          originalVoiceActor: string | null;
          rank: number;
        };
      }[];
      nodes: {
        actor: {
          __typename: string;
          internalId: number;
          lastName: string;
          firstName: string;
          seo: {
            __typename: string;
            browsable: boolean;
          };
          picture: {
            __typename: string;
            id: string;
            internalId: number;
            url: string;
            path: string;
          } | null;
          appearanceStats: {
            __typename: string;
            totalMovies: number;
            totalSeries: number;
          };
        };
        voiceActor: string | null;
        originalVoiceActor: string | null;
        rank: number;
      }[];
    };
    countries: {
      __typename: string;
      id: number;
      name: string;
      localizedName: string;
    }[];
    relatedTags: any[];
    flags: {
      hasDvdRelease: boolean;
      hasNews: boolean;
      hasOnlineProduct: boolean;
      hasOnlineRelease: boolean;
      hasPhysicalProduct: boolean;
      hasPreview: boolean;
      hasShowtime: boolean;
      hasSoundtrack: boolean;
      hasTheaterRelease: boolean;
      hasTrivia: boolean;
      hasAwards: boolean;
      isClub300Approved: boolean;
      hasClub300News: boolean;
      isComingSoon: boolean;
      isPlayingNow: boolean;
      tvRelease: boolean;
    };
    customFlags: {
      isPremiere: boolean;
      weeklyOuting: boolean;
    };
    synopsisFull: string;
  };
  showtimes: {
    dubbed: any[];
    original: any[];
    local: {
      __typename: string;
      internalId: number;
      startsAt: string;
      timeBeforeStart: string;
      service: string | null;
      experience: string | null;
      comfort: string | null;
      projection: string[];
      picture: string | null;
      sound: string | null;
      tags: string[];
      diffusionVersion: string;
      data: {
        __typename: string;
        ticketing: {
          __typename: string;
          urls: string[];
          type: string;
          provider: string;
        }[];
      };
      isPreview: boolean;
      isWeeklyMovieOuting: boolean;
    }[];
    multiple: {
      __typename: string;
      internalId: number;
      startsAt: string;
      timeBeforeStart: string;
      service: string | null;
      experience: string | null;
      comfort: string | null;
      projection: string[];
      picture: string | null;
      sound: string | null;
      tags: string[];
      diffusionVersion: string;
      data: {
        __typename: string;
        ticketing: {
          __typename: string;
          urls: string[];
          type: string;
          provider: string;
        }[];
      };
      isPreview: boolean;
      isWeeklyMovieOuting: boolean;
    }[];
  };
}
